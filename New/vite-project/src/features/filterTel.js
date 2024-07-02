import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: [],
  };

export const filterTelSlice = createSlice({
    name: "filterTel",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            console.log(action.payload);
            const filteredTel = action.payload.telephone.List.filter((tel) =>
                tel.name.toLowerCase().includes(action.payload.search.toLowerCase())
            );
            state.search = filteredTel;
        },
    },
});

export const { setSearch } = filterTelSlice.actions;
export default filterTelSlice.reducer;
