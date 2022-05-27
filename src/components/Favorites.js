import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import bag from '../images/bag.png'
import trash from '../images/trash.png'
import { removeFave } from '../actions/favAction'
import { addToCart } from '../actions/cartAction'
import box from '../images/box.png'
import shirt from '../images/shirt.jpeg'
import jacket from '../images/jacket.jpeg'
import jewelry from '../images/jewelry.jpeg'
import shoes from '../images/shoes.jpeg'
import Footer from './Footer'

function Favorites() {

    const favorites = useSelector(state => state.storeFaves);
    const cartItems = useSelector(state => state.storeCart);
    const dispatch = useDispatch();

    const[error, setError] = useState({
        text: '',
        display: false
    });

    const handleAdd = (fav) => {
        if (!cartItems.some(el => el.id == fav.id)) { // item not in cart yet
            dispatch(addToCart(fav))
            
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

  return (
    <fav>
    <div className='fav-container'>
    <header>
        <h1 className='favHeader'>Favorites</h1>
        <h5>{ favorites.length } Items</h5>
    </header>

    {favorites.length !== 0 ?
        <div className='favorites'>
            {error.display ? <h1 className='existsError'>{ error.text }</h1> : ''}
            {favorites.map((favorite) => (
                <div className='fav-list'>
                    <img src={favorite.category === "men's clothing" ? shirt : (favorite.category === "women's clothing" ? jacket : (favorite.category === 'electronics' ? shoes : jewelry))} alt='hoodie image' className='favImg' />
                    <h4>{ favorite.title }</h4>
                    <h4>${ favorite.price }</h4>
                    <h4>Color: orange</h4>

                    <div className="fav-buttons">
                        <button className='purchaseButton' onClick={() => handleAdd(favorite)}><img src={bag} alt='bag icon' />Add to bag</button>
                        <button className='purchaseButton' onClick={() => dispatch(removeFave(favorite.id))} ><img src={trash} />Remove</button>
                    </div>
                </div>
            ))}
        </div> : 
        <section className="empty">
            <img src={box} alt="empty box" />
            <h1>Uh oh, looks like you're a bit picky.</h1>
        </section>}
    </div>
    <Footer />
    </fav>
  )
}

export default Favorites