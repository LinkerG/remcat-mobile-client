import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CategoryState {
    category: string
    division: string
}

const initialState: CategoryState = {
    category: "S",
    division: "M",
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        },
        setDivision: (state, action: PayloadAction<string>) => {
            state.division = action.payload
        }
    },
})

export const { setCategory, setDivision } = categorySlice.actions;

export default categorySlice.reducer;