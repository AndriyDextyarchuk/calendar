import React from 'react'
// import classes from './week.module.css'

export default function Week({date}) {
    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const hours = [
        '00', '1', '2', '3', '4', '5',
        '6','7', '8', '9', '10', '11',
        '12', '13','14', '15', '16', '17', 
        '18', '19', '21','22', '23'
    ]
    return (
        <table>
            <thead>
                <tr>
                    <td></td>   
                    {week.map((item) =>
                        <td key={item}>
                            <div>{item}&nbsp;</div>
                            <div>{date.day}/{date.month + 1}</div>
                        </td>
                    )}
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