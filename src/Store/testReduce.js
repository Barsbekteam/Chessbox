import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    competition: [],
    loader: false,
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        getCompetitions(state, action){
            state.competition = action.payload
        },
        getLoader(state, action){
            state.loader = action.payload
        },
    }
})

export const {getCompetitions,getLoader} = testSlice.actions
export default testSlice.reducer