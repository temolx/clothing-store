import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import trash from '../images/trash.png'
import visa from '../images/visa.png'
import paypal from '../images/paypal.png'
import apple from '../images/apple-pay.png'
import { removeFromCart } from '../actions/cartAction'
import Discount from './Discount'
import box from '../images/box.png'
import shirt from '../images/shirt.jpeg'
import jacket from '../images/jacket.jpeg'
import jewelry from '../images/jewelry.jpeg'
import shoes from '../images/shoes.jpeg'
import Footer from './Footer'

function Cart() {

  const storeItems = useSelector(state => state.storeCart);
  const dispatch = useDispatch();

  const[shippingFee, setShippingFee] = useState(3.99);

  const[displayDiscount, setDisplayDiscount] = useState(false);
  const[discountValue, setDiscountValue] = useState(0);
  const[update, setUpdate] = useState(false);
 
  const[itemInfo, setItemInfo] = useState(storeItems.map((storeItem) => {
       return {
        price: storeItem.price,
        id: storeItem.id,
        quantity: 1
      }
    }))
  let sum = itemInfo.reduce((prev, current) => prev + current.price * current.quantity, 0);

  useEffect(() => {
    console.log(storeItems)
    console.log(itemInfo)
  }, [itemInfo])

  const handleCartDelete = (id) => {
    dispatch(removeFromCart(id))

    const filteredItemInfo = itemInfo.filter((element) => {
      if (element.id !== id) {
        return element;
      }
    })
    setItemInfo(filteredItemInfo)
  }

  const handleQuantity = (id, n) => {
    itemInfo.map((element) => {
      if (element.id == id) {
        element.quantity = Number(n);
      }
    })
    setUpdate(!update)
  }


  return (
    <div className='cart-container'>
      {displayDiscount ? <Discount setDisplayDiscount={setDisplayDiscount} discountValue={discountValue} setDiscountValue={setDiscountValue} /> : ''}
      {displayDiscount ? <div id="overlay" /> : ''}

    <h1 className='cartHeader'>Shopping bag</h1>
    <div className='cart'>
    {storeItems.length !== 0 ?
      <section className="checkout-info">
        {storeItems && storeItems.map((storeItem, index) => (
          <div className='storeItems-list'>
            <div className="item-image">
              <img src={storeItem.category === "men's clothing" ? shirt : (storeItem.category === "women's clothing" ? jacket : (storeItem.category === "electronics" ? shoes : jewelry))} alt='item image' />
            </div>

            <div className="item-details">
              <div className='details-text'>
                <h3>{ storeItem.title }</h3>
                <h3>${ storeItem.price }</h3>
                <select name="quantity" className="select-quantity" onChange={(e) => handleQuantity(storeItem.id, e.target.value)} value={itemInfo[index].quantity}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

              <div className='remove-button'>
                <button onClick={() => handleCartDelete(storeItem.id)}><img src={trash} alt='remove button' /></button>
              </div>
          </div>
        ))}
        </section> :
        <section className="empty empty-cart">
            <img src={box} alt="empty box" />
            <h1>Uh oh, nothing to see here.</h1>
        </section>}

        <section className="checkout">
          <div className="discount-container">
            <h5>Discounts</h5>
            <button onClick={() => setDisplayDiscount(true)}>Apply discounts</button>
          </div>
          <div className="checkout-item">
            <h5>Order value</h5>
            <h5>${ Math.round(sum * 100) / 100 }</h5>
          </div>

          <div className="checkout-item">
            <h5>Shipping</h5> 
            <h5>${ storeItems.length !== 0 ? shippingFee : 0 }</h5>
          </div>

          <div className="checkout-item">
            <h5>Discount</h5>
            <h5>- { storeItems.length !== 0 ? discountValue : 0}%</h5>
          </div>

          <hr />

          <div className="total checkout-item">
            <h5>Total</h5>
            <h5>${ storeItems.length !== 0 ? Math.round(((sum + shippingFee) - (sum + shippingFee) * discountValue / 100) * 100) / 100 : 0}</h5>
          </div>

          <button className='checkoutButton purchaseButton'>Continue to checkout</button>

          <h5 className='discount'>25% off $100 + free shipping with code 4667</h5>

          <section className="payment-options">
            <h5>We accept</h5>
            <img src={visa} alt='visa logo' />
            <img src={paypal} alt='paypal logo' />
            <img src={apple} alt='apple pay logo' />
          </section>

          <h5 className='tax'>The estimated tax will be confirmed once you added your shipping address in checkout.<br/> 30-day returns. Read more about our return and refund policy.</h5>
        </section>
    </div>
    <Footer />
    </div>
  )
}

export default Cart