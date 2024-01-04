
import * as React from 'react';
import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Scroll></Scroll>
        <Session>
        <Cart>
        {children}
        </Cart>
        </Session>
        <div className = "footer">
          
          <br></br>
          <div>
            <div className = "text-center"><Link className = "text-2xl font-black text-orange-400 hover:text-amber-400" href="/">DEVCART</Link></div>
            <div className = "text-center text-slate-200">Australia Brazil Canada China France Germany Italy Japan Mexico Netherlands Poland Singapore Spain Turkey United Arab Emirates</div>
            <div className = "text-center text-slate-200">United Kingdom United States</div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/4 text-orange-50">
              <dl className = "text">
                <dt>AbeBooks</dt>
                <dt>ShopBooks</dt>
              </dl>
            </div>
            <div className="basis-1/4 text-orange-50">
              <dl className = "text">
                <dt>DevCart WebServices</dt>
                <dt>DevCart Audio</dt>
              </dl>
            </div>
            <div className="basis-1/4 text-orange-50">
              <dl className = "text">
                <dt>Audible</dt>
                <dt>DevNow</dt>
              </dl>
            </div>
            <div className="basis-1/4 text-orange-50">
              <dl className = "text">
                <dt>DP Music</dt>
                <dt>Music Review</dt>
              </dl>
            </div>
          </div>
          <br></br>
          <div className = "text-center text-slate-200">
          Conditions of Use & Sale
          </div>
          <div className = "text-center text-slate-200">
          Privacy Notice
          </div>
          <div className = "text-center text-slate-200">
          © 1996-2023, DevCart.com, Inc. or its affiliates
          </div>
        </div>
      </body>
    </html>
  )
}