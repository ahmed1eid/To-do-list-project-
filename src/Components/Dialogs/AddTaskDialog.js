import PropTypes from 'prop-types';
// Mui components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import CustomizedSnackbar from '../Snackbar';
// Hooks
import { useContext , useState } from 'react';
import { TasksContext } from '../../Contexts/TasksContext';
import { AddTaskDialogStyle } from '../../Styles/Styles';// Styles

export default function AddTaskDialog({ open , setOpen }) {
    let { dispatch } = useContext(TasksContext);
    let [OpenSnackBar, SetOpenSnackBar] = useState(false);
    let [NewtaskTitle, setNewTaskTitle] = useState('');
    let [NewtaskDescription, setNewTaskDescription] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const OpenSnackbarFunc = () => {
        SetOpenSnackBar(true);
    };

    const SaveTask = () => {
        
        dispatch({ type: 'ADD_TASK', NewtaskTitle , NewtaskDescription   })

        setNewTaskTitle('');
        setNewTaskDescription('');
    
        setOpen(false);
    
        OpenSnackbarFunc();
    };

    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                <Box sx={AddTaskDialogStyle}>
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
                    <Button disabled={(NewtaskTitle && NewtaskDescription )?false:true} onClick={SaveTask} variant="contained" color="primary" fullWidth>Save Task</Button>
                </Box>
            </Dialog>
            {/* عرض Snackbar بعد تحديث المهمة */}
            {OpenSnackBar && <CustomizedSnackbar 
                open={OpenSnackBar} 
                CloseSnackbar={() => SetOpenSnackBar(false)} 
                massage="Task has been added successfully"
                background= {'#1d2482'}
            />}
        </>
    );
}

AddTaskDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
};
