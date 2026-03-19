import * as React from 'react';
import Button from '@mui/material/Button';
import AddTaskDialog from './AddTaskDialog';

export default function AddTask() {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen((prev) => !prev);
    };

    return (
        <div>
            <Button onClick={handleClick} color="error" variant="contained">add task</Button>
            <AddTaskDialog
                open={open}
                setOpen={setOpen}
            />
        </div>
    );
}