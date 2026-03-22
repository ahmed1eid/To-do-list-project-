import PropTypes from 'prop-types';
// Mui components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import CustomizedSnackbar from '../Snackbar';
// Hooks
import { useContext , useState  } from 'react';
import { TasksContext } from '../../Contexts/TasksContext';
import { DeleteDialogstyles } from '../../Styles/Styles';// Styles

export default function DeleteDialog({ open , task , CoverDeletePopup }) {
    const [OpenSnackBar, SetOpenSnackBar] = useState(false);
    let { dispatch } = useContext(TasksContext);

    const handleClose = () => {
        CoverDeletePopup();
    };

    const OpenSnackbarFunc = () => {
        SetOpenSnackBar(true);
    };


    function DeleteTask() {
        dispatch({ type: 'DELETE_TASK', task });

        CoverDeletePopup();

        OpenSnackbarFunc();
    }

    return (
        <>
        <Dialog onClose={handleClose} open={open}>
            <Box sx={DeleteDialogstyles}>
                <h2>Are you sure you want to delete this task?</h2>
                <Button
                onClick={DeleteTask}
                variant="contained" color="warning" fullWidth>delete task</Button>
            </Box>
        </Dialog>
        {/* عرض Snackbar بعد حذف المهمة */}
        {OpenSnackBar && <CustomizedSnackbar 
        open={OpenSnackBar} 
        CloseSnackbar={() => SetOpenSnackBar(false)} 
        massage="Task was deleted successfully"
        background= '#ed0707'
        />}
        </>
    );
}

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    task: PropTypes.object.isRequired,
    CoverDeletePopup: PropTypes.func.isRequired
};
