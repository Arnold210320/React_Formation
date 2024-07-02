import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}


export const telCartSlice = createSlice({
    name: "telCart",
    initialState,
    reducers: {
       addToCart: (state, action) => {
        const telIndex = state.cart.findIndex(obj => obj.id==action.payload.id)

        if (telIndex!==-1){
            state.cart[telIndex].quantity++
        }
        else{
            state.cart.push({...action.payload,quantity:1})
        }
       },
       removeFromCart: (state, action) => {
        const tel = state.cart.find(obj => obj.id==action.payload)
        if (tel){
            if(tel.quantity == 1 ){
                state.cart = state.cart.filter(obj => obj.id!==action.payload)
            }
            else{
                tel.quantity-- 
            }
        }
    }
}
})

export const {addToCart , removeFromCart} = telCartSlice.actions
export default telCartSlice.reducer;  

