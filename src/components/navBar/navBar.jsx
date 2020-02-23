import React, {useContext} from 'react'
import classes from './navBar.module.css'
import {DateContext} from './../../App'
import {NavLink} from 'react-router-dom'

export default function NavBar({date, buttons}) {
    const{dispatch} = useContext(DateContext)

    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    const newDate = new Date(date.year, date.month, date.day)
    
    const startWeek = new Date(date.year, date.month, date.day - newDate.getDay())
    const endtWeek = new Date(date.year, date.month, date.day - newDate.getDay() + 7)

    const activeButton = buttons.filter(i => i.status === true)[0].name
    const today = date.day === new Date().getDate() && date.month === new Date().getMonth() && date.year === new Date().getFullYear()
    
    return(
        <div className={classes.container}>
            <div className={classes.nav}>
                <button onClick={() => dispatch({type: `decrement${activeButton}`})}>{`<`}</button>
                <button onClick={() => dispatch({type: `increment${activeButton}`})}>></button>&#160;
                <button onClick={() => dispatch({type: 'reset'})}
                    className={today ? classes.active : ''}>today
                </button>
                </div>
            <div className={classes.date}>
                {activeButton === 'Month' ? 
                    <>
                        <span>{monthNames[newDate.getMonth()]}&#160;</span>
                        <span>{newDate.getFullYear()}</span>
                    </> : activeButton === 'Week' ? <>
                        <span>{`${startWeek.getDate() + 1} ${startWeek.getMonth() === endtWeek.getMonth() ?'': 
                        shortMonthNames[startWeek.getMonth()]} -`}&#160;</span>
                        <span>{`${endtWeek.getDate()} ${shortMonthNames[endtWeek.getMonth()]},`}&#160;</span>
                        <span>{newDate.getFullYear()}</span>
                    </> : <>
                        <span>{newDate.getDate()}&#160;</span>
                        <span>{shortMonthNames[newDate.getMonth()]}&#160;</span>
                        <span>{newDate.getFullYear()}</span>
                    </>
                }
            </div>
            <div className={classes.switch}>
                {buttons.map((item) => 
                        <NavLink  exact to={`${item.path}`} key={item.name}
                            onClick={() => dispatch({type: 'toggleContext', payload: item.name})}
                            className={activeButton === item.name ? classes.active : ''}>
                            {item.name}
                        </NavLink>
                )}
            </div> 
        </div>
    )
}