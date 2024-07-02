import {configureStore} from "@reduxjs/toolkit"
import counter from "./feature/Counter"
import fruits from "./feature/Fruits"
import fruitCart from "./feature/FruitCart"
import users from "./feature/Users"
import chrono from "./feature/Chrono"

export const store = configureStore({
    reducer: {
        counter,
        fruits,
        fruitCart,
        users,
        chrono
    }
})

