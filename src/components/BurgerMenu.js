import React from 'react'
import burger from '../images/burger.png'
import close from '../images/close.png'
import { useDispatch, useSelector } from 'react-redux'
import { showMenu } from '../actions/navAction';

function BurgerMenu() {

    const dispatch = useDispatch();
    const menuVisible = useSelector(state => state.menuStatus)

  return (
    <div className='burgerMenu'>
        <img src={menuVisible ? close : burger} alt="burger menu icon" onClick={() => dispatch(showMenu())} />
    </div>
  )
}

export default BurgerMenu