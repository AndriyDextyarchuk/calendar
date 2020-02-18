import React from 'react'
import classes from './day.module.css'

export default function Day() {
    const hours = [
        '00', '1', '2', '3', '4', '5',
        '6','7', '8', '9', '10', '11',
        '12', '13','14', '15', '16', '17', 
        '18', '19', '21','22', '23'
    ]
    return(
        <table>
            <thead>
                <tr>
                    <td className={classes.tdFirst}></td>   
                    <td>Monday</td>
                </tr>
                <tr>
                    <td className={classes.tdFirst}>all day</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {hours.map((hours) =>
                    <tr key={hours}>
                        <td className={classes.tdFirst}>{hours}</td>
                        <td></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}