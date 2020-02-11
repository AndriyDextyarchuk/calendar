import React   from 'react';
import classes from './month.module.css';

export default function Month({date}) {

  const month = new Date(date.year, date.month)
  const nextMonth = new Date(date.year, date.month + 1)

  const shift = (month.getDay() + 6) % 7
  const daysOfMonth = Math.round((nextMonth - month)/(1000*3600*24))
  const amountOfItems = Math.ceil((daysOfMonth + shift)/7) * 7
  const arr =[]

  for(let i = 1; i <= amountOfItems; i++) {
   if (i > shift && i <= shift + daysOfMonth){
      const data = new Date(date.year, date.month, i - shift)
      arr.push(
        <div key={data} className={classes.day}>
          <p>{i - shift}</p>
        </div>
      )
    } else {
      arr.push(<div key={i} className={classes.day}></div>)
    }
  }

  const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  
  return(
    <div className={classes.wrapper}>
       <div className={classes.weekHeader}>
            {week.map((item) =>
              <div key={item} className={classes.item}>
                {item}
              </div>)
            }
        </div>
      <div className={classes.container}>
        {arr}
      </div>
    </div>
  )
}