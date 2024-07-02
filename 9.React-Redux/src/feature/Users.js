import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  data: undefined
}

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
      state.loading = false
    },
    addLoader: (state) => {
      state.loading = true;
    },
    addError: (state) => {
      state.error = true;
    },
  },
});


export function getData(action) {
    return function (dispatch, getState) {
        dispatch(addLoader())
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => dispatch(addData(data)))
        .catch(error => dispatch(addError()))
    }
}

export const { addData, addLoader, addError } = users.actions;

export default users.reducer;

