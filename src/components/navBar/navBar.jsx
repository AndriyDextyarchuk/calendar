import React, {useContext, useEffect} from 'react'
import classes from './navBar.module.css'
import {DateContext} from './../../App'
import {NavLink} from 'react-router-dom'

export default function NavBar({date, buttons}) {
    const{dispatch} = useContext(DateContext)
   
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    const newDate = new Date(date.year, date.month, date.day)
    const day = newDate.getDay()
    
    const startWeek = new Date(date.year, date.month, date.day - day)
    const endtWeek = new Date(date.year, date.month, date.day - day + 7)

    const activeButton = buttons.filter(i => i.status === true)[0].name

    return(
        <div className={classes.container}>
            <div className={classes.nav}>
                <button onClick={() => dispatch({type: `decrement${activeButton}`})}>{`<`}</button>
                <button onClick={() => dispatch({type: `increment${activeButton}`})}>></button>
                <button onClick={() => dispatch({type: 'reset'})}>today</button>
            </div>
            <div className={classes.date}>
                {activeButton === 'Month' ? 
                    <>
                        <p>{monthNames[newDate.getMonth()]}&#160;</p>
                        <p>{newDate.getFullYear()}</p>
                    </> : activeButton === 'Week' ? <>
                        <p>{`${startWeek.getDate() + 1} ${startWeek.getMonth() === endtWeek.getMonth() ?'': 
                        shortMonthNames[startWeek.getMonth()]} -`}&#160;</p>
                        <p>{`${endtWeek.getDate()} ${shortMonthNames[endtWeek.getMonth()]},`}&#160;</p>
                        <p>{newDate.getFullYear()}</p>
                    </> : <>
                        <p>{newDate.getDate()}&#160;</p>
                        <p>{shortMonthNames[newDate.getMonth()]}&#160;</p>
                        <p>{newDate.getFullYear()}</p>
                    </>
                }
            </div>
            <div className={classes.switch}>
                {buttons.map((item) => 
                    <button key={item.name}
                        onClick={() => dispatch({type: 'toggleContext', payload: item.name})}>
                        <NavLink  exact to={`${item.path}`}>
                            {item.name}
                        </NavLink>
                    </button>
                )}
            </div> 
        </div>
    )
}