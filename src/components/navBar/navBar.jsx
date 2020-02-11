import React, { useContext } from 'react'
import classes from './navBar.module.css'
import {DateContext} from './../../App'
import {NavLink} from 'react-router-dom'

export default function NavBar({date}) {
    const{dispatch} = useContext(DateContext)
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const newDate = new Date(date.year, date.month)
   
    return(
        <div className={classes.container}>
            <div className={classes.nav}>
                <button onClick={() => dispatch({type: 'decrementMonth'})}>{`<`}</button>
                <button onClick={() => dispatch({type: 'incrementMonth'})}>></button>
                <button onClick={() => dispatch({type: 'reset'})}>today</button>
            </div>
            <div className={classes.date}>
                <p>{monthNames[newDate.getMonth()]}</p>
                <p>{newDate.getFullYear()}</p>
            </div>
            <div className={classes.switch}>
                <button>
                    <NavLink  exact to='/'>
                        Month
                    </NavLink>
                </button>
                <button>
                    <NavLink to='/week'>
                        Week
                    </NavLink>
                </button>
                <button>
                    <NavLink to='/day'>
                        Day
                    </NavLink>
                </button>
            </div>
        </div>
    )
}
 