import PropTypes from 'prop-types';
// Mui components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import CustomizedSnackbar from '../Snackbar';
// Hooks
import { useState , useEffect , useContext } from 'react';
import { TasksContext } from '../../Contexts/TasksContext';
import { UpdateDialogstyles } from '../../Styles/Styles';// Styles

export default function UpdateDialog({ open , task , CoverUpdatePopup }) {
    let [OpenSnackBar, SetOpenSnackBar] = useState(false);
    let { dispatch } = useContext(TasksContext);
    let [UpdateTaskTitle, setUpdateTaskTitle] = useState("");
    let [UpdateTaskDescription, setUpdateTaskDescription] = useState("");

    const OpenSnackbarFunc = () => {
        SetOpenSnackBar(true);
    };

    useEffect(() => {
        if (task) {
            setUpdateTaskTitle(task.title || "");
            setUpdateTaskDescription(task.description || "");
        }
    }, [task]);

    function UbdateTask() {
        dispatch({type:"UPDATE_TASK",task,UpdateTaskTitle,UpdateTaskDescription})
       
        CoverUpdatePopup();
        
        OpenSnackbarFunc();
    }

    const handleClose = () => {
        CoverUpdatePopup();
        if (task) {
            setUpdateTaskTitle(task.title || "");
            setUpdateTaskDescription(task.description || "");
        }
    };


    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                <Box sx={UpdateDialogstyles}>
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
                    onClick={UbdateTask} disabled={(UpdateTaskTitle && UpdateTaskDescription)?false:true} variant="contained" color="primary" fullWidth>Save changes</Button>
                </Box>
            </Dialog>
            {/* عرض Snackbar بعد تحديث المهمة */}
            {OpenSnackBar && <CustomizedSnackbar 
            open={OpenSnackBar} 
            CloseSnackbar={() => SetOpenSnackBar(false)} 
            massage="Task was updated successfully"
            background= '#2e7d32'
            />}
        </>
    );
}

UpdateDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    task: PropTypes.object.isRequired,
    CoverUpdatePopup: PropTypes.func.isRequired
};
