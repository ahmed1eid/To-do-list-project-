import './App.css';
import CheckIcon from '@mui/icons-material/Check';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { Card, IconButton, ClickAwayListener,Portal, Box, Button } from '@mui/material';
import { useContext } from 'react';
import { TasksContext } from './Contexts/TasksContext';

export default function Task({task , id , title = "Task Title", description = "Task description goes here..." , IsCompleted = true }) {
    let [openUpdatePopup, setOpenUpdatePopup] = useState(false);
    let [openDeletePopup, setOpenDeletePopup] = useState(false);
    let [UpdateTaskTitle, setUpdateTaskTitle] = useState(task.title);
    let [UpdateTaskDescription, setUpdateTaskDescription] = useState(task.description);
    
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

    let styles = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '12px',
        boxShadow: 24,
        p: 4,
        zIndex: 1300,
    };

    let AppareUpdatePopup = () => {
        setOpenUpdatePopup((prev) => !prev);
    };

    let AppareDeletePopup = () => {
        setOpenDeletePopup((prev) => !prev);
    };
    
    let closePopup = () => {
        setOpenUpdatePopup(false);
        setOpenDeletePopup(false);
    };

    function UbdateTask() {
        let updatedTasks = Tasks.map((t) => {
            if (t.id === task.id) {
                return {
                    ...t,
                    title: UpdateTaskTitle,
                    description: UpdateTaskDescription
                };
            }
            return t;
        });
        // update the tasks in localStorage
        localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
        updatedTasks = JSON.parse(localStorage.getItem("Tasks"));
        // update the tasks 
        setTasks(updatedTasks);
        setOpenUpdatePopup(false);
    }

    function DeleteTask() {
        let updatedTasks = Tasks.filter((t) => t.id !== task.id);
        // update the tasks in localStorage
        localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
        updatedTasks = JSON.parse(localStorage.getItem("Tasks"));
        // update the tasks
        setTasks(updatedTasks);
        setOpenUpdatePopup(false);
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

    return (
        <ClickAwayListener onClickAway={closePopup}>
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

                    <IconButton onClick={AppareUpdatePopup} sx={EditIconStyle} aria-label="edit" size="small" color="success" >
                        <BorderColorIcon />
                    </IconButton>
                    
                    <IconButton onClick={AppareDeletePopup} sx={DeleteIconStyle} aria-label="delete" size="small" color="warning" >
                        <DeleteIcon />
                    </IconButton>
                </div>

                {openUpdatePopup ? (
                    <Portal>
                        <Box sx={styles}>
                            <input
                                value={UpdateTaskTitle} 
                                onChange={(e) => setUpdateTaskTitle(e.target.value)} 
                                type="text"
                                placeholder="Task title" 
                                style={{ width: '100%', marginBottom: '10px' }} 
                            />
                            <textarea 
                                value={UpdateTaskDescription} 
                                onChange={(e) => setUpdateTaskDescription(e.target.value)} 
                                placeholder="Task description" 
                                style={{ width: '100%', marginBottom: '10px' }} 
                            />
                            <Button 
                            onClick={UbdateTask}
                            variant="contained" color="primary" fullWidth>Save changes</Button>
                        </Box>
                    </Portal>
                ) : null}

                {openDeletePopup ? (
                    <Portal>
                        <Box sx={styles}>
                            <h2>Are you sure you want to delete this task?</h2>
                            <Button 
                            onClick={DeleteTask}
                            variant="contained" color="warning" fullWidth>delete task</Button>
                        </Box>
                    </Portal>
                ) : null}

            </Card>
        </ClickAwayListener>
    );
}