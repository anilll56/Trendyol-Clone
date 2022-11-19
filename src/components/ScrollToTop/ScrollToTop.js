import React from 'react'
import './ScrollToTop.css'
import { useState , useEffect } from 'react';
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const goToTopp = ()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
    
        if (winScroll > heightToHidden) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
      }, []);
    return (
        <>
        {
            isVisible===true ? <div onClick={goToTopp} className='ale'><div className='wwww'></div></div> :""
        }
        </>
       
        
    )
}

export default ScrollToTop
