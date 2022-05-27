import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import hoodie from '../images/hoodie.png'
import love from '../images/love.png'
import loveActive from '../images/love-active.png'
import { addToCart } from '../actions/cartAction'
import { addToFaves } from '../actions/favAction'
import { removeFave } from '../actions/favAction'
import shirt from '../images/shirt.jpeg'
import jacket from '../images/jacket.jpeg'
import jewelry from '../images/jewelry.jpeg'
import shoes from '../images/shoes.jpeg'
import shirt_closeup from '../images/shirt-closeup.jpeg'
import jacket_closeup from '../images/jacket_closeup.jpeg'
import jewelry_closeup from '../images/jewelry_closeup.jpeg'
import shoes_closeup from '../images/shoes_closeup.jpeg'
import Footer from './Footer'
import ScrollTop from './ScrollTop'
import { addInput } from '../actions/InputAction'

function Shop() {

    const storeData = useSelector(state => state.storeData);
    const storeFavs = useSelector(state => state.storeFaves);
    const cartItems = useSelector(state => state.storeCart);
    const userInput = useSelector(state => state.userInput);

    useEffect(() => {
        dispatch(addInput(''))
      }, [])

    const dispatch = useDispatch();

    const[error, setError] = useState({
        text: '',
        display: false
    });

    const[hoverStatus, setHoverStatus] = useState('');

    const handleLove = (data) => {
        if (!storeFavs.some(el => el.id == data.id)) { // item has not been favorited yet
            dispatch(addToFaves(data))
        }
        else {
            dispatch(removeFave(data.id)) // item already exists in favorites
        }
    }

    const handleAdd = (data) => {
        if (!cartItems.some(el => el.id == data.id)) { // item not in cart yet
            dispatch(addToCart(data))
            
            setError({
                ...error,
                text: 'Item added to cart',
                display: true
            })
        }
        else { // item already in cart
            setError({
                ...error,
                text: 'Item already in cart!',
                display: true
            })
        }

        setTimeout(() => {
            setError({
                text: '',
                display: false
            })
        }, 3000)
    }

    const handleHoverOver = (data) => {
        setHoverStatus(data.id)
    }

    const handleHoverLeave = () => {
        setHoverStatus('');
    }
    
  return (
    <div className="shop">
    <ScrollTop />
    <div className='onlineStore'>
        {error.display ? <h1 className='existsError'>{ error.text }</h1> : ''}
        {storeData && storeData.filter((element) => {
            if (userInput === '') {
                return element;
            }
            if (element.title.toLowerCase().includes(userInput.toLowerCase())) {
                return element;
            }
        }).map((data) => (
            <div className='storeItems' key={ data.id }>
                <div className="item-container" onMouseOver={() => handleHoverOver(data)} onMouseLeave={() => handleHoverLeave()}>
                <button className='favButton' onClick={() => handleLove(data)}><img src={storeFavs.some(el => el.id == data.id) ? loveActive : love} alt='favorite button' /></button>

                {data.category === "men's clothing" ? <img className='itemImage' src={hoverStatus === data.id ? shirt_closeup : shirt} alt='item image' /> : (data.category === "women's clothing" ? <img className='itemImage' src={hoverStatus === data.id ? jacket_closeup : jacket} alt='item image' /> : (data.category === "electronics" ? <img className='itemImage' src={hoverStatus === data.id ? shoes_closeup : shoes} alt='item image' /> : <img className='itemImage' src={hoverStatus === data.id ? jewelry_closeup : jewelry} alt='item image' />))}

                <div className="itemText">
                    <h3>{ data.category !== 'electronics' ? data.category : 'shoes' }</h3>
                    <h3>${ data.price }</h3>
                    <button className='purchaseButton' onClick={() => handleAdd(data)}>Add To Cart</button>
                </div>
                </div>
            </div>
        ))}
    </div>

    <Footer />
    </div>
  )
}

export default Shop