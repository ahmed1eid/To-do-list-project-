import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useContext } from 'react';
import { TasksContext } from './Contexts/TasksContext';

export default function UpdateDialog({ open , task , setOpenUpdatePopup }) {
    let { Tasks, setTasks } = useContext(TasksContext);
    let [UpdateTaskTitle, setUpdateTaskTitle] = useState(task.title);
    let [UpdateTaskDescription, setUpdateTaskDescription] = useState(task.description);
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

    const handleClose = () => {
        setOpenUpdatePopup(false);
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

    return (
        <Dialog onClose={handleClose} open={open}>
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
        </Dialog>
    );
}

UpdateDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    task: PropTypes.object.isRequired,
    setOpenUpdatePopup: PropTypes.func.isRequired
};
