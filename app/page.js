'use client'

import Products from './Components/Products'
import Navbar from './Components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Products />
      <div style={{
        textAlign: 'center',
        padding: '20px 0',
        backgroundColor: '#B9B4C7',
        width: '100%'
      }}>
        <p>All Right Reserved Redux Store</p>
      </div>
    </div>
  )
}
