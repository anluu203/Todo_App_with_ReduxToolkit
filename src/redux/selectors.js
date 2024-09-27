import { createSelector } from "reselect"

export const todoListSelectors = (state) =>state.todoList
export const searchTextSelectors = (state) => state.filter.search
export const filterStatusSelectors = (state) => state.filter.status
export const filterPrioritySelectors = (state) => state.filter.priority



export const todoRemainingSelectors = createSelector( 
    todoListSelectors,
    searchTextSelectors,
    filterStatusSelectors,
    filterPrioritySelectors,
     (todoList, searchText, status, priorities) => {
        return todoList.filter((todo) => {
            if(status === 'All')
            {
                return priorities.length 
                ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                : todo.name.includes(searchText)
            }
            return todo.name.includes(searchText) && 
            (status === 'Completed' ? todo.completed : !todo.completed) &&
            (priorities.length ? priorities.includes(todo.priority) : true)
            
        });
    }
)