'use client'

import React, { useEffect } from 'react'
import { fetchProducts } from '../store/productSlice'
import {useDispatch, useSelector} from 'react-redux'
import ProductCard from './ProductCard'

const Products = () => {

  const dispatch = useDispatch()
  const { data, status } = useSelector(state => state.product);
  // console.log(data)

    useEffect(()=> {
        dispatch(fetchProducts());
    }, [])

    if(status === 'loading'){
      return <h1 style={{textAlign: 'center', marginTop: 50}}>Loading...</h1>
    }

  return (
    <>
    {
      
    }
      <h1 className='product-heading' style={{textAlign: 'center', margin: '20px 0px',}}>Latest Production Collection</h1>
      <div className='product-container'>
        <div className='innerproduct-con'>
        {
          data.map((item) => {
            return <ProductCard key={item.id} data={item}/>
          })
        }
        </div>
      </div>
    </>
  )
}

export default Products