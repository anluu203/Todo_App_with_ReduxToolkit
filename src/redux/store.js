import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../components/Filters/FiltersSlice";
import { todoSlice } from "../components/TodoList/todoSlice";

export const store = configureStore({
    reducer:{
        filter: filtersSlice.reducer,
        todoList: todoSlice.reducer,
    }
})