import { createSlice } from "@reduxjs/toolkit";


const initialState = [
        {id:'1', name:'Learn React', completed: false, priority:'Medium' },
        {id:'2', name:'Learn React-redux', completed: true, priority:'Low' }
    ]
export const todoSlice = createSlice({
    name:'todoList',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed;
        }
    }
})