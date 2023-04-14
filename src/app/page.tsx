import getTracks from '@/actions/getTracks'
import LandingPage from '@/component/Landingpage/page';
import Topbar from '@/component/Topbar.tsx/page'

export default async function Home() {

  const songData = await getTracks();
  return (
    <div className='basis-5/6 p-10 flex flex-col'>
      <Topbar/>
      <LandingPage songs={songData}/>
    </div>
  )
}
