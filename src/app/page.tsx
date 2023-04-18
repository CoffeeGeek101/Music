import getPlaylists from '@/actions/getPlaylists';
import LandingPage from '@/component/Landingpage/page';


export default async function Home() {

  const songs = await getPlaylists();

  return (
    <div>
      <LandingPage songs={songs}/>
    </div>
  )
}
