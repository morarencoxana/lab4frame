// slices/todos.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.todos.push(action.payload);
            },
            prepare: (text) => ({
                payload: {
                    id: Math.random().toString(36).substring(2, 9),
                    text,
                    isCompleted: false,
                },
            }),
        },
        toggleTodoCompletion: (state, action) => {
            const todoIndex = state.todos.findIndex(
                (todo) => todo.id === action.payload
            );
            state.todos[todoIndex].isCompleted = !state.todos[todoIndex].isCompleted;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
    },
});

export const { actions: todoActions } = todosSlice;
export default todosSlice.reducer;
