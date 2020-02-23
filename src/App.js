import React, {useReducer} from 'react';
import classes from './App.module.css';
import Day from './components/day/day.jsx'
import Week from './components/week/week.jsx'
import Month from './components/month/month.jsx';
import NavBar from './components/navBar/navBar.jsx';
import {Route} from 'react-router-dom'

export const DateContext = React.createContext()

const initialState = {
  date: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  },
  buttons: [
    {name: 'Month', status: true, path: '/'},
    {name: 'Week', status: false, path: '/week'},
    {name: 'Day', status: false, path: '/day'},
  ],
}

function dateReducer (state, action) {
  switch (action.type) {
    case 'toggleContext': {
      const newButtons = state.buttons.map(
        item => item.status === true ? {...item, status: false} : item).map(
        item => item.name === action.payload ? {...item, status: true} : item
      )
      return {...state, buttons: newButtons};
    }
    case `incrementMonth`: 
      return {...state, date: {...state.date, month: state.date.month + 1}}
    case `decrementMonth`: 
      return {...state, date: {...state.date, month: state.date.month - 1}}
    case 'incrementWeek':
      return {...state, date: {...state.date, day: state.date.day + 7}}
    case 'decrementWeek':
      return {...state, date: {...state.date, day: state.date.day - 7}}
    case 'incrementDay':
      return {...state, date: {...state.date, day: state.date.day + 1}}
    case 'decrementDay':
      return {...state, date: {...state.date, day: state.date.day - 1}}
    case 'reset':
      return {...state, date:{
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),}
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(dateReducer, initialState)

  return (
    <DateContext.Provider value={{dispatch}}>
      <div className={classes.App}>
        <NavBar date= {state.date} buttons={state.buttons}/> 
        <Route exact path='/' render={(props) => <Month date={state.date} {...props}/>}/>
        <Route path='/week' render={(props) => <Week date={state.date} {...props}/>}/>
        <Route path='/day' render={(props) => <Day date={state.date} {...props}/>}/>
      </div>
    </DateContext.Provider>
  )
}