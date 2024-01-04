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
    <div className="progress-container">
       <div className="progress-bar" id="myBar" style={{width:'0%'}}></div>
    </div>
  )
}
