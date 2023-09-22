'use client'

import React from 'react'
import Navbar from '../Components/Navbar'
import CartProduct from '../Components/CartProduct'
import { useSelector } from 'react-redux'

const page = () => {
  const item = useSelector(state => state.cart);
  
  
  return (
    <>
      <Navbar />
      {
        item.length === 0 ?
        <div style={{margin: '50px auto', textAlign: 'center'}}>
          <img style={{width: 300}} src="Images/cart.png" alt="cart-icon" />
          <p>Oops...</p>
          <p>Cart is Empty.</p>
        </div>
        : 
        ''
      }
      <div className='cart-container'>
          {
            item.map((cartproduct) => {
              return <CartProduct key={cartproduct.id} cartproduct={cartproduct}/>
            })
          }
      </div>
    </>
  )
}

export default page