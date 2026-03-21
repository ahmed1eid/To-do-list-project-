import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import { useContext , useState  } from 'react';
import { TasksContext } from '../../Contexts/TasksContext';
import CustomizedSnackbar from '../Snackbar';

export default function DeleteDialog({ open , task , CoverDeletePopup }) {

    const [OpenSnackBar, SetOpenSnackBar] = useState(false);
    let { dispatch } = useContext(TasksContext);
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
            <Box sx={styles}>
                <h2>Are you sure you want to delete this task?</h2>
                <Button
                onClick={DeleteTask}
                variant="contained" color="warning" fullWidth>delete task</Button>
            </Box>
        </Dialog>
        {/* عرض Snackbar بعد حذف المهمة */}
        {OpenSnackBar && <CustomizedSnackbar open={OpenSnackBar} CloseSnackbar={() => SetOpenSnackBar(false)} massage="Task was deleted successfully" />}
        </>
    );
}

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    task: PropTypes.object.isRequired,
    CoverDeletePopup: PropTypes.func.isRequired
};
