import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: {
            reducer: (state, action) => {
                state.tasks.push({
                    id: Math.random().toString(36).substring(2, 9),
                    title: action.payload,
                    isCompleted: false,
                });
            },
            prepare: (text) => ({
                payload: text,
            }),
        },
        removeTask: (state, action) => {
            const taskIndex = state.tasks.findIndex(
                (task) => task.id === action.payload
            );
            state.tasks.splice(taskIndex, 1);
        },
        toggleTaskCompletion: (state, action) => {
            const taskIndex = state.tasks.findIndex(
                (task) => task.id === action.payload
            );
            state.tasks[taskIndex].isCompleted = !state.tasks[taskIndex].isCompleted;
        },
    },
});

export const { actions: taskActions } = tasksSlice;
export default tasksSlice.reducer;
