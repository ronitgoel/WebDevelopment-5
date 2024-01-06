import './globals.css'
import * as React from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Providers } from './providers';
import Cart from '@/components/Cart'
import Session from '@/components/Session';
import Scroll from '@/components/scroll';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'DevCart',
  description: 'A Site For Those Who Love Shopping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Link rel="icon" href="/favicon.ico" sizes="any" />
        <Link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Session>
          <Cart>
            <Providers>
              <Scroll></Scroll>
              {children}
            </Providers>
          </Cart>
        </Session>
        <div className = "footer bg-indigo-950">
          <div className = "text-center pt-4"><Link className = "text-3xl font-black text-orange-400 hover:text-amber-400" href="/">DEVCART</Link></div>
          <div className="flex flex-row text-center mt-6">
            <div className="basis-1/4 text-orange-50 text-xs sm:text-md md:text-lg">
                <dt>AbeBooks</dt>
                <dt>ShopBooks</dt>
            </div>
            <div className="basis-1/4 text-orange-50 text-xs sm:text-md md:text-lg">
                <dt>WebServices</dt>
                <dt>Audio</dt>
            </div>
            <div className="basis-1/4 text-orange-50 text-xs sm:text-md md:text-lg">
                <dt>Audible</dt>
                <dt>DevNow</dt>
            </div>
            <div className="basis-1/4 text-orange-50 text-xs sm:text-md md:text-lg">
                <dt>DP Music</dt>
                <dt>Music Review</dt>
            </div>
          </div>
          <div className="mt-6">
            <div className = "text-center text-slate-200 text-xs sm:text-md md:text-lg">
              Conditions of Use & Sale
            </div>
            <div className = "text-center text-slate-200 text-xs sm:text-md md:text-lg">
              Privacy Notice
            </div>
            <div className = "text-center text-slate-200 text-xs sm:text-md md:text-lg">
              © 1996-2023, DevCart.com, Inc. or its affiliates
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}