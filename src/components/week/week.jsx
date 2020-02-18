import React from 'react'
// import classes from './week.module.css'

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

    const arr = week.map((item) =>
        <td key={item}>
            <div>{item}&nbsp;</div>
            <div>
                {new Date(date.year, date.month, date.day - day + week.indexOf(item)).getDate()}
                /{new Date(date.year, date.month, date.day - day + week.indexOf(item)).getMonth() + 1}
            </div>
        </td>
    )

    return (
        <table>
            <thead>
                <tr>
                    <td></td>   
                    {arr}
                </tr>
                <tr>
                    <td>all day</td>
                    {week.map((item) =><td key={`${item}_allDay`}></td>)}
                </tr>
            </thead>
            <tbody>
                {hours.map((hours) =>
                    <tr key={hours}>
                        <td>{hours}</td>
                        {week.map((week) =><td key={`${week} ${hours}`}></td>)}
                    </tr>
                )}
            </tbody>
        </table>
    )
}