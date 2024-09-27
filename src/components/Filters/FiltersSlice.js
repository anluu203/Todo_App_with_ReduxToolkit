// Redux-toolkit sẽ tự động tích hợp reducers và actions
// vào làm 1

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
        search:'',
        status:'All',
        priority:[]
}

export const filtersSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        filterChangeInput: (state, action) => {
            state.search = action.payload
        },
        filterChangeCheckBox: (state, action) => {
            state.status = action.payload
        },
        filterPriorityChange: (state, action) => {
            state.priority = action.payload
        }
    }
})