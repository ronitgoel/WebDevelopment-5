'use client'
import * as React from 'react'
import { useEffect } from 'react';

export default function Scroll() {
    function myFunction() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    useEffect(() => {
        window.onscroll = function() {myFunction()};
      }, []);
  return (
    <div className="w-[100%] h-[10px] fixed bg-yellow-500">
       <div className="fixed h-[10px] bg-pink-500" id="myBar" style={{width:'0%'}}></div>
    </div>
  )
}
