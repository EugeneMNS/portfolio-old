import React from 'react'
import s from './RemoveWork.module.css'




export const RemoveWork = () => {

    return (
        <div className={s.removeWorkBlock}>
            <div className={s.removeWorkContainer}>
                <h2 className={s.title}>considering options for remote work</h2>
                <a href={'#!'} className={s.linkOffRemoveWork} >
                    write me
                </a>
            </div>
        </div>
    )
}