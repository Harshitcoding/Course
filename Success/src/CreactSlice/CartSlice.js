import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items : JSON.parse(localStorage.getItem('cartItem')) || []
} 

const CartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        add :(state,action) => {
            state.items.push(action.payload)
            localStorage.setItem('cartItem', JSON.stringify(state.items))
        },
        remove : (state,action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem('cartItem', JSON.stringify(state.items))
        }
    }
})

export const {add,remove} = CartSlice.actions

export default CartSlice.reducer