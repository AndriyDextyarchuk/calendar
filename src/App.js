import React from 'react';
import classes from './App.module.css';

function Month({month, year}) {

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  let current = new Date(year, month)
  let next = new Date(year, month + 1)
  let diff = (next - current)/(1000 * 3600 * 24)
  
  let index = (current.getDay() + 6) % 7

  const ROWS = Math.ceil((index + diff)/7);
  const COLS =7;

  let table = [], 
      tr,
      counter = 1 - index;

  for(let i = 0; i < ROWS; i++) {
    tr = []
    for(let j =0; j < COLS; j++) {
    tr.push(<td key={j}>
              <p>{counter > 0 && counter <= diff ? counter : ''}</p>
            </td>)
      counter++
    }
    table.push(<tr key={i}>
                 {tr}
               </tr>)
  }

  return(
    <table className={classes.table}>
      <caption className={classes.tcaption}>
        {monthNames[month]} 
        {year}
      </caption>
      <thead>
        <tr>
          <th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sut</th><th>Sun</th>
        </tr>
      </thead>
      <tbody>{table}</tbody>
    </table>
  )
}

function App() {

  let date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()

  return (
    <div className={classes.App}>
      <Month year={year} month={month}/>
    </div>
  );
}

export default App;
