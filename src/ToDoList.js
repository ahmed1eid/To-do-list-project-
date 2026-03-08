import './App.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Task from './Task';

export default function ToDoList() {
    let Tasks = [
        {
            title: "Task 1", description: "This is the first task." ,
        },
        {
            title: "Task 2", description: "This is the second task." ,
        }
    ]

    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        My ToDos
                    </Typography>
                </CardContent>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                        m: 1,
                        },
                    }}
                    >
                    <ButtonGroup variant="outlined" aria-label="Basic button group">
                        <Button>all</Button>
                        <Button>active</Button>
                        <Button>completed</Button>
                    </ButtonGroup>
                    {Tasks.map((task) => (
                        <Task key={Tasks.indexOf(task)} title={task.title} description={task.description} />
                    ))}
                        <Button color="error" variant="contained">add task</Button>
                </Box>
            </Card>
        </div>
    );
}