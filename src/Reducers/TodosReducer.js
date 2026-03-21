import { v4 as uuidv4 } from 'uuid';

export default function TodosReducer(Tasks, action) {
    
    switch(action.type){
        case "ADD_TASK":      {
            const newTask = {
                id: uuidv4(),
                title: action.NewtaskTitle,
                description: action.NewtaskDescription,
                IsCompleted: false
            };

            let UpdatedTasks = [...Tasks,newTask]

            localStorage.setItem("Tasks", JSON.stringify(UpdatedTasks));

            return(UpdatedTasks);
        }
        case "UPDATE_TASK":   {
            let updatedTasks = Tasks.map((t) => {
                if (t.id === action.task.id) {
                    return {
                        ...t,
                        title: action.UpdateTaskTitle,
                        description: action.UpdateTaskDescription
                    };
                }
                return t;
            });
    
            localStorage.setItem("Tasks", JSON.stringify(updatedTasks));

            return(updatedTasks);
    
        }
        case "COMPLETE_TASK": {
            let updatedTasks = Tasks.map((t) => {
                if (t.id === action.task.id) {
                    return {
                        ...t,
                        IsCompleted: !action.task.IsCompleted,
                    };
                }
                return t;
            });

            localStorage.setItem("Tasks", JSON.stringify(updatedTasks));

            return(updatedTasks)
        }
        case "DELETE_TASK":   {
            const updatedTasks = Tasks.filter((t) => t.id !== action.task.id);
            
            localStorage.setItem("Tasks", JSON.stringify(updatedTasks));

            return(updatedTasks);
        }
        default : {
            throw new Error("Unknowen Action" + action.type);
        }

    }
}