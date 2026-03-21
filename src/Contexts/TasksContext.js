import { createContext , useReducer } from "react";
import TodosReducer from "../Reducers/TodosReducer";

export const TasksContext = createContext({});

function TasksProvider({ children }) {

    let [Tasks , dispatch ] = useReducer(TodosReducer ,[], () => {
        const savedData = localStorage.getItem("Tasks");
        return savedData ? JSON.parse(savedData) : [];
    });

    return (
        <TasksContext.Provider value={{ Tasks, dispatch }}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksProvider;