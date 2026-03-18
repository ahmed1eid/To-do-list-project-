import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { TasksContext } from './Contexts/TasksContext';

export default function DeleteDialog({ open , task , setOpenDeletePopup }) {
    let { Tasks, setTasks } = useContext(TasksContext);
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
        setOpenDeletePopup(false);
    };

    function DeleteTask() {
        let updatedTasks = Tasks.filter((t) => t.id !== task.id);
        // update the tasks in localStorage
        localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
        updatedTasks = JSON.parse(localStorage.getItem("Tasks"));
        // update the tasks
        setTasks(updatedTasks);
        setOpenDeletePopup(false);
    }

    return (
        <Dialog onClose={handleClose} open={open}>
        <Box sx={styles}>
            <h2>Are you sure you want to delete this task?</h2>
            <Button
            onClick={DeleteTask}
            variant="contained" color="warning" fullWidth>delete task</Button>
        </Box>
        </Dialog>
    );
}

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    task: PropTypes.object.isRequired,
    setOpenDeletePopup: PropTypes.func.isRequired
};
