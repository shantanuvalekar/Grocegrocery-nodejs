import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast'


const initialState = {
    productList: [],
    cartItem: []
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            console.log(action)
            state.productList = [...action.payload]
        },
        addCartItem: (state, action) => {
            console.log(action)
            const check = state.cartItem.some((el) => el._id === action.payload._id)
            if (check) {
                toast('Product is already added in the Cart')
            } else {
                const total = action.payload.price
                state.cartItem = [...state.cartItem, { ...action.payload, qty: 1, total: total }]
                toast('Product is added to the Cart')
            }
        },
        deleteCartItem: (state, action) => {
            //1 Method
            state.cartItem = state.cartItem.filter((el) => el._id !== action.payload)
            toast('Product is removed from the Cart')
            // 2nd Method
            // const index=state.cartItem.findIndex((el)=>el._id===action.payload)
            // state.cartItem.splice(index,1)
        },
        increaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload)
            var qty = state.cartItem[index].qty
            state.cartItem[index].qty = qty + 1
            var price = state.cartItem[index].price
            state.cartItem[index].total = price * state.cartItem[index].qty
        },
        decreaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload)
            var qty = state.cartItem[index].qty
            if (qty > 1) {
                state.cartItem[index].qty = qty - 1
                var price = state.cartItem[index].price
                state.cartItem[index].total = state.cartItem[index].total - price
            } else {
                state.cartItem = state.cartItem.filter((el) => el._id !== action.payload)
                toast('Product is removed from the Cart')
            }
        }
    }
})

export const { setDataProduct, addCartItem, deleteCartItem, increaseQty, decreaseQty } = ProductSlice.actions
export default ProductSlice.reducer