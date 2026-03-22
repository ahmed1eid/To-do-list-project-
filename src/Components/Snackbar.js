import { Fragment } from 'react';
// Mui components
import Snackbar from '@mui/material/Snackbar';
import { IconButton} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function CustomizedSnackbar({open, CloseSnackbar , massage = "Note archived" , background= '#2e7d32'}) {
    const handleClose = () => {
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
                autoHideDuration={3000}
                onClose={handleClose}
                message={massage}
                action={action}
                ContentProps={{
                    sx: {
                    background: background,
                    color: '#fff',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    }
                }}
            />
        </div>
    );
}