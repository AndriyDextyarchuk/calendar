import React, {useReducer} from 'react';
import classes from './App.module.css';
import Day from './components/day/day.jsx'
import Week from './components/week/week.jsx'
import Month from './components/month/month.jsx';
// import Year from './components/year/year.jsx';
import NavBar from './components/navBar/navBar.jsx';
import {Route} from 'react-router-dom'

export const DateContext = React.createContext()

const initialState = {
  date: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  },
  context: ['Month', 'Week', 'Day']
}

function dateReducer (state, action) {
  switch (action.type) {
    case 'incrementMonth': 
      return {...state, month: state.month + 1};
    case 'decrementMonth':
      return {...state, month: state.month - 1};
    case 'incrementDay': 
      return {...state, day: state.day + 1};
    case 'decrementDay':
      return {...state, day: state.day - 1};
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(dateReducer, initialState.date)
  return (
    <DateContext.Provider value={{dispatch}}>
      <div className={classes.App}>
        <NavBar date= {state}/>
        <Route exact path='/' render={(props) => <Month date={state} {...props}/>}/>
        {/* <Route path='/year' render={(props) => <Year date={state} {...props}  />}/> */}
        <Route path='/week' render={(props) => <Week date={state} {...props}/>}/>
        <Route path='/day' component={Day}/>
      </div>
    </DateContext.Provider>
  )
}