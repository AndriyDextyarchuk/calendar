import React from 'react';
import classes from './year.module.css';
import WeekHeader from '../weekHeader/week.Header.jsx'

export default function Year({date}) {
  const year = new Date(date.year, 0)
  const nextYear = new Date(date.year + 1, 0)

  const shift = (year.getDay() + 6) % 7
  const daysOfYear = Math.round((nextYear - year)/(1000*3600*24))
  const amountOfItems = Math.ceil((daysOfYear + shift)/7) * 7
  const arr =[]

  for(let i = 1; i <= amountOfItems; i++) {
   if (i > shift && i <= shift + daysOfYear){
      const data = new Date(date.year, date.month, i - shift)
      arr.push(
        <div key={data} className={classes.day}></div>
      )
    } else {
      arr.push(<div key={i} className={classes.day}></div>)
    }
  }
  
  return(
    <div className={classes.wrapper}>
      <WeekHeader/>
      <div className={classes.container}>
        {arr}
      </div>
    </div>
  )
}