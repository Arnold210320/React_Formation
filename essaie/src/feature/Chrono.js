import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 100,
    intervalID : undefined
}

 export const chrono = createSlice({
  name: "chrono",
  initialState,
  reducers: {
    tick: (state , action) => {
        state.value --
    },
    reset: (state , action) => {
        state.value = 100
        state.intervalID && window.clearInterval(state.intervalID)
        state.intervalID = undefined
    },
    setUpID: (state , action) => {
        state.intervalID = action.payload
    },
    stop: (state , action) => {
        clearInterval(state.intervalID)
        state.intervalID = undefined
    }
  },
});


export function startChrono(){
    return function (dispatch ,getState) {
        if(getState().chrono.intervalID){
            return
        }
        const intervalID = setInterval(() => {
            dispatch(tick())
        }, 1000)
        dispatch(tick())
        dispatch(setUpID(intervalID))
    }
}
 export function stopChrono(){
    return function (dispatch ,getState) {
        clearInterval(getState().chrono.intervalID)
        dispatch(stop())
    }
}
export function resetChrono(){
    return function (dispatch ,getState) {
        dispatch(reset())
    }
}

const { tick , reset , setUpID , stop } = chrono.actions 
export default chrono.reducer
