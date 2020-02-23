import React from 'react'
import classes from './day.module.css'

export default function Day({date}) {
    const selectedDate = new Date(date.year, date.month, date.day)
    const sevenDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const hours = [
        '00', '1', '2', '3', '4', '5',
        '6','7', '8', '9', '10', '11',
        '12', '13','14', '15', '16', '17', 
        '18', '19', '21','22', '23'
    ]
    return(
        <section className={classes.table}>
            <header>
                <article>
                    <span></span>   
                    <div>{sevenDays[(selectedDate.getDay() + 6) % 7]}</div>
                    <span></span>
                </article>
                <article>
                    <span>all day</span>
                    <div></div>
                    <span></span>
                </article>
            </header>
            <main>
                {hours.map((hours) =>
                    <article key={hours}>
                        <span>{hours}</span>
                        <div></div>
                    </article>
                )}
            </main>
        </section>
    )
}