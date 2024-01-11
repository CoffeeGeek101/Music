"use client"

import { BASE_URL } from '@/lib/util';
import { setActiveState, setDeviceId, setPlayerState } from '@/redux/playerSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import axios from 'axios';
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'


interface IPlayerClient{
    token : string;
    songid ?: string | null;
    lastSong ?: string | null;
    appToken ?: string;
}

type Player = Spotify.Player;

const PlayerClient : React.FC<IPlayerClient> = ({token, songid}) => {
  console.log('Rendering PlayerClient');
  const [current_track, setTrack] = useState<any>({});
  const [isPaused, setPause] = useState(true);
  const playerRef = useRef<Player | null>(null);

  const device_id = useAppSelector(state => state.player.deviceId);
  const playerState = useAppSelector(state => state.player.playerstate);
  const playerActiveState = useAppSelector(state => state.player.isActive);

  const dispatch = useAppDispatch();


 useEffect(()=> {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        let playerInstance : Player | null = null;

        window.onSpotifyWebPlaybackSDKReady = () => {
          console.log('Spotify SDK Ready');
          playerInstance = new window.Spotify.Player({
              name: 'Musique',
              getOAuthToken: cb => { cb(token); },
              volume: 0.5
          });

          playerRef.current = playerInstance;

        
          playerInstance.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
            dispatch(setDeviceId(device_id));
            dispatch(setActiveState(true));
          });
        

          playerInstance.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
            // dispatch(setActiveState(false));
        });

        playerInstance.addListener('player_state_changed', state => {
          if(!state){
            return null;
          }

          setTrack(state.track_window.current_track);
          dispatch(setPlayerState(state));

            playerInstance?.getCurrentState().then( state => { 
            //   console.log('hello');
            // (!state)? dispatch(setActiveState(false)) : dispatch(setActiveState(true));
          });
        });

        playerInstance.connect();

      };
 },[])

 const playSong = async (songid: string | null | undefined) => {
  const player = playerRef.current;
  if (player) {
    const url = `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`;
    const data = {
      uris: [`spotify:track:${songid}`],
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    await axios
      .put(url, data, { headers })
      .then((res) => {
        console.log(res);
        setPause(false);
      })
      .catch((err) => {
        console.log(err);
      });

  }
};


useEffect(() => {
  const playSongAndSetState = async () => {
    if (songid) {
      await playSong(songid);
      setPause(false);
      dispatch(setActiveState(true));
    }
  };

  playSongAndSetState();
}, [device_id, songid]);


  const pauseSong = async () => {
    const player = playerRef.current;
    if(player){
      const url = `https://api.spotify.com/v1/me/player/pause?device_id=${device_id}`;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }

      await axios.put(url, {}, {headers})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
      setPause(true);
      dispatch(setActiveState(true));
    }
  };

  const fetchCurrentSong = async () => {
    const player = playerRef.current;
    if(player){
      const url = `https://api.spotify.com/v1/me/player/currently-playing`;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }

      await axios.get(url, {headers})
      .then(res => {
        res.data?.item?.id ? setTrack(res.data.item) : setTrack({});
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
    }
  };

  useEffect(()=>{ 
    fetchCurrentSong();
  },[]);

  if(!playerActiveState){
    return (
      <div>
        <p>Player is not active</p>
      </div>
    )
  }else{
    return (
      <div
      style={{boxShadow:'1px 2px 10px 5px #09090987'}}
      className='bg-white/30 w-[70vw] fixed bottom-5 left-50 h-[80px] rounded-2xl backdrop-blur-2xl flex flex-row py-3 px-3 items-center justify-start gap-5 z-50'>
        
        <img src={current_track?.album?.images[0].url} className='w-[60px] h-[60px] object-cover flex basis-auto rounded-xl'/>

        <div className='flex flex-col basis-9/12 lg:basis-6/12 lg:flex-row lg:justify-between'>

            <div className='flex flex-col items-start justify-start'>
              <p className='text-base font-medium'>{current_track?.name}</p>
              {current_track?.artists ? <p className='text-sm font-light mt-[-3px]'>{current_track?.artists[0].name}</p> : null}
            </div>

            <div className='flex flex-row gap-10 items-center'> 
              <SkipBack size={18} onClick={()=>playerRef.current?.previousTrack}/>
              <div>
                { 
                isPaused ? 
                 <Play size={24} onClick={()=>playSong(songid)} className="active:scale-95 cursor-pointer" /> 
                  :  <Pause size={24} onClick={()=>pauseSong()} className="active:scale-95 cursor-pointer"/>
                }
              </div>
              <SkipForward size={18} onClick={()=>playerRef.current?.nextTrack}/>
            </div>

        </div>
      </div>
    )
  }


}

export default PlayerClient