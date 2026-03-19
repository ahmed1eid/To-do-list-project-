import Snackbar from '@mui/material/Snackbar';
import { Fragment } from 'react';
import { IconButton} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function CustomizedSnackbar({open, CloseSnackbar , massage = "Note archived"}) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        CloseSnackbar();
    };

    const action = (
        <Fragment>
            <IconButton onClick={handleClose} aria-label="complete" size="small" color="primary" >
                <CheckIcon />
            </IconButton>
        </Fragment>
    );

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={massage}
                action={action}
            />
        </div>
    );
}