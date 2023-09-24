'use client'

import React from 'react'
import {BsTrash3} from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const CartProduct = ({cartproduct}) => {

    const dispatch = useDispatch();
    const removehandle = (id) => {
        dispatch(remove(id))
    }
    const {image, name, id, price} = cartproduct;

  return (
    <div className='cart-item' key={id}>
        <div className='cart-image'>
            <img src={image} alt={name} />
        </div>
            <p>{name}</p>
        <div className='cart-heading'>
            <p>{price}</p>
        </div>
        <div className='cart-btn'>
            <button onClick={()=> removehandle(id)}><BsTrash3 /></button>
        </div>
    </div>
  )
}

export default CartProduct