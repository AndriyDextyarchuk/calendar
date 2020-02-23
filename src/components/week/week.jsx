import React from 'react'
import classes from './week.module.css'

export const WeekContext = React.createContext()

export default function Week({date}) {

    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const hours = [
        '00', '1', '2', '3', '4', '5',
        '6','7', '8', '9', '10', '11',
        '12', '13','14', '15', '16',
        '17', '18', '19', '21','22', '23'
    ]

    const day = (new Date(date.year, date.month, date.day).getDay() + 6) % 7
    const today = date.day === new Date().getDate() && date.month === new Date().getMonth() && date.year === new Date().getFullYear()

    const arr = week.map((item) => 
        <div key={item} className={today && week.indexOf(item) === (new Date().getDay() + 6) % 7 ? classes.today : ''}>
            <span>{item}&nbsp;</span>
            <div>
                {new Date(date.year, date.month, date.day - day + week.indexOf(item)).getDate()}
                /{new Date(date.year, date.month, date.day - day + week.indexOf(item)).getMonth() + 1}
            </div>
        </div>
    )

    return (
        <section className={classes.table}>
            <header>
                <article>
                    <span></span>   
                    {arr}
                    <span></span>
                </article>
                <article>
                    <span>all day</span>
                    {week.map((item) => 
                        <div key={`${item}_allDay`}
                            className={today && week.indexOf(item) === (new Date().getDay() + 6) % 7 ? classes.today : ''}>
                        </div>
                    )}
                    <span></span>
                </article>
            </header>
            <main className={classes.container}>
                {hours.map(item =>
                    <article key={item}>
                        <span>{item}</span>
                        {week.map(item => 
                            <div key={`${item} ${hours}`}
                                className={today && week.indexOf(item) === (new Date().getDay() + 6) % 7 ? classes.today : ''}>
                            </div>
                        )}
                    </article>
                )}
            </main>
        </section>
    )
}