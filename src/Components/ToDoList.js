import '../App.css'; // Styles
// Mui components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
// Hooks
import {  useState , useContext } from 'react';
import { TasksContext } from '../Contexts/TasksContext';
// Components
import Task from './Task';
import AddTask from './AddTask';
import DeleteDialog from './Dialogs/DeleteDialog';
import UpdateDialog from './Dialogs/UpdateDialog';

export default function ToDoList() {
    let [AppareTasks, setAppareTasks] = useState("all");

    let [SelectedTask, setSelectedTask] = useState({});

    let [openDeletePopup, setOpenDeletePopup] = useState(false);
    let [openUpdatePopup, setOpenUpdatePopup] = useState(false);

    const { Tasks } = useContext(TasksContext);

    const filteredTasks = Tasks.filter((task) => {
        if (AppareTasks === "active") return !task.IsCompleted;
        if (AppareTasks === "completed") return task.IsCompleted;
        return true;
    });

    return (
        <>
            <Card style={{maxHeight: "80vh",overflow:"scroll"}} sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        My ToDos
                    </Typography>
                </CardContent>

                <Box
                    sx={{
                        minWidth: 275,
                        maxWidth: 500, 
                        m: "20px auto", 
                        position: 'relative', 
                        minHeight: 400, 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pb: 10
                    }}
                    >
                    <ButtonGroup variant="outlined" aria-label="Basic button group">
                        <Button
                        variant={AppareTasks === "all" ? "contained" : "outlined"}
                        onClick={() => setAppareTasks("all")}>all</Button>
                        <Button
                        variant={AppareTasks === "active" ? "contained" : "outlined"}
                        onClick={() => setAppareTasks("active")}>active</Button>
                        <Button
                        variant={AppareTasks === "completed" ? "contained" : "outlined"}
                        onClick={() => setAppareTasks("completed")}>completed</Button>
                    </ButtonGroup>
                    {filteredTasks.map((task) => (
                        <Task 
                            task={task} 
                            key={task.id} 
                            AppareDeletePopup={() => setOpenDeletePopup(true)} 
                            AppareUpdatePopup={() => setOpenUpdatePopup(true)} 
                            SelectTask={(task) => setSelectedTask(task)} 
                        />
                    ))}
                    <div style={{ position: 'absolute', bottom: 0 }}>
                        <AddTask />
                    </div>
                </Box>
            </Card>

            <UpdateDialog 
                open={openUpdatePopup}
                task={SelectedTask}
                CoverUpdatePopup={() => setOpenUpdatePopup(false)}
            />

            <DeleteDialog
                open={openDeletePopup}
                task={SelectedTask}
                CoverDeletePopup={() => setOpenDeletePopup(false)}
            />
        </>    
    );
}