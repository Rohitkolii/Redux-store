import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',

    initialState : {
        data: [],
        status : 'idle'
    },

    reducers: {
        setProduct : (state, action) => {
            state.data = action.payload;
        },

        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;


// Thunk 

export const fetchProducts = ()=> {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus('loading'))
        try {
            const res = await fetch("https://api.pujakaitem.com/api/products");
            const data = await res.json();
            dispatch(setProduct(data));
            dispatch(setStatus('idle'));
        } catch (error) {
            console.log(error)
            dispatch(setStatus('error'))
        }
    }
}