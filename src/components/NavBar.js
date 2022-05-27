import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import love from '../images/love.png'
import bag from '../images/bag.png'
import { useDispatch, useSelector } from 'react-redux';
import BurgerMenu from './BurgerMenu';
import { showMenu } from '../actions/navAction';
import search from '../images/search.png'
import { addInput } from '../actions/InputAction';

function NavBar() {

  const storeItems = useSelector(state => state.storeCart)
  const storeFaves = useSelector(state => state.storeFaves)
  const menuVisible = useSelector(state => state.menuStatus)
  const userInput = useSelector(state => state.userInput);

  const dispatch = useDispatch();

  const[displayDropdown, setDisplayDropdown] = useState(false)

  return (
    <nav>
        {menuVisible ? <div id="whiteBG" />: ''}
        <BurgerMenu className="burgerMenu" />
        {menuVisible ? <div className='mobile-menu'>
          <div onClick={() => dispatch(showMenu())}>
            <Link to='/'>Welcome</Link>
            <Link to='/shop'>Online Shop</Link>
            <li>Collection</li>
            <li>About Us</li>
            <Link to='/contact'>Contact</Link>
          </div>
        </div> : ''}
        <Link to='/'><img src={logo} alt='company logo' /></Link>
        <ul>
            <li><Link to='/'>Welcome</Link></li>

            <li onMouseEnter={() => setDisplayDropdown(true)} onMouseLeave={() => setDisplayDropdown(false)} className='drop-down-container'>
              <Link to='#'>Online Shop</Link>

              {displayDropdown ? <div className='drop-down'>
              <h4><Link to='/shop' className='drop-down-container'>Men</Link></h4>
              <h4><Link to='/shop' className='drop-down-container'>Women</Link></h4>
              <h4><Link to='/shop' className='drop-down-container'>Kids</Link></h4>
              <h4><Link to='/favorites' className='drop-down-container'>Accessories</Link></h4>
              <h4><Link to='/cart' className='drop-down-container'>New arrivals</Link></h4>
            </div> : ''}

            </li>
            <li>Collection</li>
            <li>About Us</li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <div className="navIcons">
                <img src={bag} alt='shopping bag icon' />
                <h6><Link to='/cart'>Shopping Bag ({storeItems.length})</Link></h6>
                <img src={love} alt='favorites icon' />
                <h6><Link to='/favorites'>Favorites ({storeFaves.length})</Link></h6>
        </div>

        <form action="">
          <label htmlFor="itemInput"><img src={search} alt="search icon"/></label>
          <input type="text" name='itemInput' placeholder='Search producs' onChange={(e) => dispatch(addInput(e.target.value))} value={userInput} />
        </form> 
    </nav>
  )
}

export default NavBar