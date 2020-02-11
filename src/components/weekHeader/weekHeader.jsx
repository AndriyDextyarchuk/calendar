import React from 'react'
import classes from '../month/month.module.css'

export default function WeekHeader() {
    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return(
        <div className={classes.weekHeader}>
            {week.map((item) =>
                <div key={item} className={classes.item}>
                    {item}
                </div>)}
        </div>
    )
}