import React from 'react'
import s from './Skills.module.css'

type skillType={
    title: string
    description: string
}

export const Skill = ({title, description}: skillType) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h2>{title}</h2>
            <span className={s.description}>{description}</span>
        </div>
    )
}