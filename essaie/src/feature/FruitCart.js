import {createSlice} from '@reduxjs/toolkit'
import { fruits } from './Fruits'

const initialState = {
    cart: [

    ]
}

export const fruitCartSlice = createSlice({
    name: 'fruitCart',
    initialState,
    reducers: {
        addOne: (state, action) => {
            const fruitIndex = state.cart.findIndex(fruit => fruit.id === action.payload.id)
            if (fruitIndex !== -1) {
                state.cart[fruitIndex].quantity ++
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                })
            }
        },
        removeOne: (state, action) => {
        const fruit = state.cart.find(fruit => fruit.id === action.payload)
        if (fruit.quantity === 1) {
            state.cart = state.cart.filter(fruit => fruit.id !== action.payload)
        } else {
            fruit.quantity --
        }
        }
    }
})

export const {addOne, removeOne} = fruitCartSlice.actions

export default fruitCartSlice.reducer

