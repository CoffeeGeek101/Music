import Sidebar from '@/component/sidebar/sidebar'
import './globals.css'
import {Outfit} from 'next/font/google'
import LoginModal from '@/component/Modals/LoginModal';
import ToastProvider from '@/component/ToastProvider';
import Topbar from '@/component/Topbar.tsx/page';
import { getCurrentUser } from '@/actions/getCurrentUser';
import PreferenceModal from '@/component/Modals/PreferenceModal';

export const metadata = {
  title: 'Music',
  description: 'a music app for yourself',
}

 const font  = Outfit({
  subsets : ['latin']
 });

export default async function RootLayout( { children } : { children: React.ReactNode } ) {

  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body
      className={`bg-slate-900 text-white ${font.className}`}
      >
        <div className='flex flex-row-reverse relative w-[100vw] h-[100vh]'>
        <ToastProvider>
        <LoginModal/>
        {user && <PreferenceModal user={user}/>}
        <Sidebar/>
        <div className='basis-5/6 p-6 ml-5 md:p-10 lg:p-10 flex flex-col gap-10 lg:pl-24 relative'>
        <Topbar user={user}/>
        {children}
        </div>
        </ToastProvider>
        </div>
      </body>
    </html>
  )
}
