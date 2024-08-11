import { configureStore } from "@reduxjs/toolkit"
import yearReducer from "./reducers/year"
import modalReducer from "./reducers/selectYearModal"

export const store = configureStore({
    reducer: {
        year: yearReducer,
        modal: modalReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch