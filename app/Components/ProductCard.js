'use client'

import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice';


const ProductCard = ({data}) => {

    const dispatch = useDispatch();
    const {image, name, price, id} = data;

    const handleaddcart = (id, image, name, price)=> {
        const cartdata = {
            id, image, name, price
        }
        dispatch(add(cartdata))
    }

  return (
    <div>
        <div key={id} className='productcard'>
            <div className='product-image'>
                <img src={image} alt='title'/>
            </div>
            <div className='product-title'>
                <p>{name}</p>
            </div>
            <div className='product-price'>
                <p>{price}</p>
                <button onClick={() => handleaddcart(id, image, name, price)}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard