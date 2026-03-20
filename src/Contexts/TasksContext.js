import { createContext , useState } from "react";

export const TasksContext = createContext({});

function TasksProvider({ children }) {

    const [Tasks, SetTasks] = useState([]);
    return (
        <TasksContext.Provider value={{ Tasks, SetTasks }}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksProvider;