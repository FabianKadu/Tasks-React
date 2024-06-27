import React, { createContext, useEffect, useState } from 'react'
import { tasks as data } from '../data/task';

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState([]);

    const createTask = (taskTitle, taskDescription) => {
        const newTask = {
            id: tasks.length + 1,
            title: taskTitle,
            description: taskDescription
        }

        setTasks([...tasks, newTask]);

    }

    const deleteTask = (taskId) => {
        const newtasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newtasks);
    }

    useEffect(() => {
        setTasks(data)
    }, []);

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask,
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

{/* <>
    {prop.children}
</> */}