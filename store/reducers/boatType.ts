import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface BoatTypeSlice {
    boatType: string
}

const initialState: BoatTypeSlice = {
    boatType: "llaut",
}

const categorySlice = createSlice({
    name: "boatType",
    initialState,
    reducers: {
        setBoatType: (state, action: PayloadAction<string>) => {
            state.boatType = action.payload
        },
    },
})

export const { setBoatType } = categorySlice.actions;

export default categorySlice.reducer;