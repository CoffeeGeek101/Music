import Sidebar from '@/component/sidebar/sidebar'
import './globals.css'
import {Outfit} from 'next/font/google'

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
        <div className='flex flex-row relative'>
        <Sidebar/>
        {children}
        </div>
      </body>
    </html>
  )
}
