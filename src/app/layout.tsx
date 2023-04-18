import Sidebar from '@/component/sidebar/sidebar'
import './globals.css'
import {Outfit} from 'next/font/google'
import Modal from '@/component/Modals/Modal';
import LoginModal from '@/component/Modals/LoginModal';

export const metadata = {
  title: 'Music',
  description: 'a music app for yourself',
}

 const font  = Outfit({
  subsets : ['latin']
 });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
      className={`bg-slate-900 text-white ${font.className}`}
      >
        <div className='flex flex-row-reverse relative w-[100vw] h-[100vh] '>
        <LoginModal/>
        <Sidebar/>
        {children}
        </div>
      </body>
    </html>
  )
}
