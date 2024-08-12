import { configureStore } from "@reduxjs/toolkit"
import yearReducer from "./reducers/year"
import modalReducer from "./reducers/selectYearModal"
import categoryReducer from "./reducers/categories"

export const store = configureStore({
    reducer: {
        year: yearReducer,
        modal: modalReducer,
        category: categoryReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch