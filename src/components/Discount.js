import React, { useState } from 'react'
import close from '../images/close.png'
import { useSelector } from 'react-redux';

function Discount({ setDisplayDiscount, discountValue, setDiscountValue }) {

  const[couponInput, setCouponInput] = useState();
  const[displayOutput, setDisplayOutput] = useState(true);
  const[output, setOutput] = useState('');
  const[discount, setDiscount] = useState(25);

  const cart = useSelector(state => state.storeCart)

  const handleApplyCoupon = () => {
    if (couponInput == 4667 && cart.length !== 0) {
      setDiscountValue(25)
    }
  }

  const handleAddCoupon = () => {
    // 25% off discount
    if (couponInput == 4667 && discountValue != 25) {
      if (cart.length !== 0) setOutput(`${ discount }% off discount added`)
      else setOutput("Cart is empty...")
    }
    else if (couponInput == 4667 && discountValue == 25) {
      setOutput(`${ discount }% discount has already been added`)
    }
    else {
      setOutput(`Invalid discount code...`)
    }
  }

  return (
    <div className='discount-cont'>
        <img src={close} alt='close button' onClick={() => setDisplayDiscount(false)} />
        <h2>Discounts</h2>

        <div className="info">
            <div className="discount-input">
                <h5>Add a discount code</h5>
                <input type="text" onChange={(e) => setCouponInput(e.target.value)} />
            </div>
            <button className='discountButton purchaseButton' onClick={handleAddCoupon}>Add</button>
        </div>

        {displayOutput ? <h3>{ output }</h3> : ''}
        <button className='applyButton discountButton purchaseButton' onClick={handleApplyCoupon}>Apply</button>
    </div>
  )
}

export default Discount