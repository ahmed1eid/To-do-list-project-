import { useState } from 'react';
import Button from '@mui/material/Button';
import AddTaskDialog from './Dialogs/AddTaskDialog';

export default function AddTask() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={handleClick} color="error" variant="contained">add task</Button>
            <AddTaskDialog
                open={open}
                setOpen={setOpen}
            />

        </>
    );
}