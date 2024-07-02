import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    list: [
        {
            name : "Mango",
            url : "/images/mango.jpg",
            price : 10,
            id : 82367896
        },
        {
            name : "Watermelon",
            url : "/images/watermelon.jpg",
            price : 15,
            id : 82367897
        }
    ]
}

export const fruits = createSlice({
    name : "fruits",
    initialState
})

export default fruits.reducer

