import React from "react";
import s from './Footer.module.css'

export const Footer = ()=>{

    return(
        <div className={s.footerBlock}>
             <div className={s.footerContainer}>
                 <h2 className={s.footerName}>My name</h2>
                 <div className={s.footerNav}>
                     <div className={s.link}></div>
                     <div className={s.link}></div>
                     <div className={s.link}></div>
                 </div>
                 <span className={s.footerEnd}>2022 STOP WAR</span>
             </div>
        </div>
    )
}