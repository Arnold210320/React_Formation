import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

export const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value ++
        },
        decrement: (state, action) => {
            state.value --
        },
        reset: (state, action) => {
            state.value = 0
        },
        divide: (state, action) => {
            state.value = state.value / 10
        },
        multiply: (state, action) => {
            state.value = state.value * 10
        }
    }
})

export const {increment, decrement, reset, divide, multiply} = counter.actions

export default counter.reducer

