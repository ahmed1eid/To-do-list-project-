import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Portal from '@mui/material/Portal';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { TasksContext } from './Contexts/TasksContext';
import { v4 as uuidv4 } from 'uuid';


export default function AddTask() {
  const { Tasks, setTasks } = useContext(TasksContext);
  const [NewtaskTitle, setNewTaskTitle] = React.useState('');
  const [NewtaskDescription, setNewTaskDescription] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'fixed',
    width: 400,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  const SaveTask = () => {
    const newTask = {
      id: uuidv4(),
      title: NewtaskTitle,
      description: NewtaskDescription,
      IsCompleted: false
    };
    setTasks([...Tasks, newTask]);
    // update the tasks in localStorage
    localStorage.setItem("Tasks", JSON.stringify([...Tasks, newTask]));
    setNewTaskTitle('');
    setNewTaskDescription('');
    setOpen(false);
  };

  return (
      <div>
        <Button onClick={handleClick} color="error" variant="contained">add task</Button>
        {open ? (
          <Portal>
            <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={styles}>
              <input 
                value={NewtaskTitle} 
                onChange={(e) => setNewTaskTitle(e.target.value)} 
                type="text"
                placeholder="Task title" 
                style={{ width: '100%', marginBottom: '10px' }} 
              />
              <textarea 
                value={NewtaskDescription} 
                onChange={(e) => setNewTaskDescription(e.target.value)} 
                placeholder="Task description" 
                style={{ width: '100%', marginBottom: '10px' }} 
              />
             <Button onClick={SaveTask} variant="contained" color="primary" fullWidth>Save Task</Button>
            </Box>
            </ClickAwayListener>
          </Portal>
        ) : null}
      </div>
  );
}