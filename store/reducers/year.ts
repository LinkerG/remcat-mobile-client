import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface YearState {
    year: number
}

const currentYear = new Date().getFullYear()

const initialState: YearState = {
    year: currentYear,
}

const yearSlice = createSlice({
    name: "year",
    initialState,
    reducers: {
        setYear: (state, action: PayloadAction<number>) => {
            state.year = action.payload
        },
        resetYear: (state) => {
            state.year = currentYear
        },
    },
})

export const { setYear, resetYear } = yearSlice.actions;

export default yearSlice.reducer;