import getPlaylists from '@/actions/getPlaylists';
import LandingPage from '@/component/Landingpage/page';
import Topbar from '@/component/Topbar.tsx/page'


export default async function Home() {

  const songs = await getPlaylists();

  return (
    <div className='basis-5/6 p-10 flex flex-col gap-10 lg:pl-24'>
      <Topbar/>
      <LandingPage songs={songs}/>
    </div>
  )
}
