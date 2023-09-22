import cartReducer from './cartSlice';
import productReducer from './productSlice'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer : {
        product : productReducer,
        cart : cartReducer,
    }
})

export default store;