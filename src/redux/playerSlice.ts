import { createSlice } from "@reduxjs/toolkit";

interface PlayerState {
    playerstate : Spotify.PlaybackState | null;
    deviceId : string | null;
    isActive : boolean;
}

const initialState : PlayerState = {
    playerstate : null,
    deviceId : null,
    isActive : true,
};

const playerSlice = createSlice({ 
    name : "player",
    initialState,
    reducers : {
        setPlayerState(state, action){
            return {
                ...state,
                playerstate : action.payload,
            }
        },
        setDeviceId(state, action){
            return {
                ...state,
                deviceId : action.payload,
            }
        },
        setActiveState(state, action){
            return {
                ...state,
                isActive : action.payload,
            }
        }
    }
 });

export const { setPlayerState, setDeviceId, setActiveState } = playerSlice.actions;
export default playerSlice.reducer;