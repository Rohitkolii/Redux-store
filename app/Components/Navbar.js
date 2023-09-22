'use client'

import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const item = useSelector(state => state.cart)
  console.log(item)
  return (
    <div className='Navbar'>
        <span>
            Redux Store
        </span>
        
        <div>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/cart'>Cart :</Link><span>{item.length}</span></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar