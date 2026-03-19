import './App.css';
import CheckIcon from '@mui/icons-material/Check';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, IconButton} from '@mui/material';
import { useContext } from 'react';
import { TasksContext } from './Contexts/TasksContext';

export default function Task({task , AppareDeletePopup , SelectTask , AppareUpdatePopup}) {    
    let { Tasks, setTasks } = useContext(TasksContext);

    let CheckIconStyle = {
        backgroundColor: task.IsCompleted ? '#04f629' : '#ffffff',
        color: task.IsCompleted ? '#ffffff' : '#04f629',
        border : task.IsCompleted ?'2px solid #ffffff' : '2px solid #04f629',
        marginRight: '10px',
        boxShadow: '0 7px 7px rgba(0,0,0,0.7)',
        '&:hover': {
            backgroundColor: '#e0e0e0',
        }
    }

    let EditIconStyle = {
        backgroundColor: '#ffffff',
        color: '#057ef7',
        marginRight: '10px',
        boxShadow: '0 7px 7px rgba(0,0,0,0.7)',
        '&:hover': {
            backgroundColor: '#e0e0e0',
        }
    }

    let DeleteIconStyle = {
        backgroundColor: '#ffffff',
        color: '#f44336',
        marginRight: '10px',
        boxShadow: '0 7px 7px rgba(0,0,0,0.7)',
        '&:hover': {
            backgroundColor: '#e0e0e0',
        }
    }

    function taskCompleted() {
        let updatedTasks = Tasks.map((t) => {
            if (t.id === task.id) {
                return {
                    ...t,
                    IsCompleted: !task.IsCompleted,
                };
            }
            return t;
        });
        // update the tasks in localStorage
        localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
        updatedTasks = JSON.parse(localStorage.getItem("Tasks"));
        // update the tasks
        setTasks(updatedTasks);
    }

    function HandleEditClick() {
        SelectTask(task);
        AppareUpdatePopup()
    }

    function HandleDeleteClick() {
        SelectTask(task);
        AppareDeletePopup()
    }

    return (
        <Card sx={{
            backgroundColor: '#033566',
            color: 'white', 
            width: 400, 
            margin: '15px auto',
            padding: '15px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.3s ease',
            transformOrigin: 'top',
            '&:hover': {
                transform: 'scaleY(1.05)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
            }
        }}>
            <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0 , textDecoration: task.IsCompleted ? 'line-through' : 'none'  }}>{task.title}</h3>
                <p style={{ margin: '5px 20px 0 0', fontSize: '14px', color: '#e0e0e0' }}>{task.description}</p>
            </div>
            
            <div >
                <IconButton onClick={taskCompleted} sx={CheckIconStyle} aria-label="complete" size="small" color="primary" >
                    <CheckIcon />
                </IconButton>

                <IconButton onClick={HandleEditClick} sx={EditIconStyle} aria-label="edit" size="small" color="success" >
                    <BorderColorIcon />
                </IconButton>
                
                <IconButton onClick={HandleDeleteClick} sx={DeleteIconStyle} aria-label="delete" size="small" color="warning" >
                    <DeleteIcon />
                </IconButton>
            </div>
        </Card>
    );
}