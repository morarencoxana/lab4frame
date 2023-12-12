import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchTasks = async () => {
    const response = await fetch("https://api.example.com/tasks");
    const data = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    return data;
};

export const getTasks = createAsyncThunk(
    "getTasks",
    async () => await fetchTasks()
);
