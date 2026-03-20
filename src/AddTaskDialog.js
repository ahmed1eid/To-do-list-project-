import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import { useContext , useState } from 'react';
import { TasksContext } from './Contexts/TasksContext';
import { v4 as uuidv4 } from 'uuid';
import CustomizedSnackbar from './Snackbar';

export default function AddTaskDialog({ open , setOpen }) {
    let [OpenSnackBar, SetOpenSnackBar] = useState(false);
    let [NewtaskTitle, setNewTaskTitle] = useState('');
    let [NewtaskDescription, setNewTaskDescription] = useState('');
    let { Tasks, SetTasks } = useContext(TasksContext);
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
        setOpen(false);
    };

    const OpenSnackbarFunc = () => {
        SetOpenSnackBar(true);
    };

    const SaveTask = () => {
        const newTask = {
        id: uuidv4(),
        title: NewtaskTitle,
        description: NewtaskDescription,
        IsCompleted: false
        };

        SetTasks([...Tasks, newTask]);

        localStorage.setItem("Tasks", JSON.stringify([...Tasks, newTask]));

        setNewTaskTitle('');
        setNewTaskDescription('');

        setOpen(false);

        OpenSnackbarFunc();
    };

    return (
        <>
            <Dialog onClose={handleClose} open={open}>
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
            </Dialog>
            {/* عرض Snackbar بعد تحديث المهمة */}
            {OpenSnackBar && <CustomizedSnackbar open={OpenSnackBar} CloseSnackbar={() => SetOpenSnackBar(false)} massage="Task has been added successfully" />}
        </>
    );
}

AddTaskDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpenDeletePopup: PropTypes.func.isRequired
};
