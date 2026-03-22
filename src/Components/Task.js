import { TasksContext } from '../Contexts/TasksContext';
// Styles
import '../App.css';
import { CheckIconStyleTrue , CheckIconStyleFalce , EditIconStyle , DeleteIconStyle , TaskStyle  } from '../Styles/Styles';
// Mui components
import CheckIcon from '@mui/icons-material/Check';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, IconButton} from '@mui/material';
import CustomizedSnackbar from './Snackbar';
// Hooks
import { useContext , useState } from 'react';

export default function Task({task , AppareDeletePopup , SelectTask , AppareUpdatePopup}) {
    let { dispatch } = useContext(TasksContext);

    let [OpenSnackBar, SetOpenSnackBar] = useState(false);

    const OpenSnackbarFunc = () => {
        SetOpenSnackBar(true);
    };

    function taskCompleted() {
        dispatch({type:"COMPLETE_TASK",task})
        OpenSnackbarFunc();

    }

    function HandleEditClick() {
        SelectTask(task);
        AppareUpdatePopup()
    }

    function HandleDeleteClick() {
        SelectTask(task);
        AppareDeletePopup()
    }

    return (
        <>
            <Card sx={TaskStyle}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0 , textDecoration: task.IsCompleted ? 'line-through' : 'none'  }}>{task.title}</h3>
                    <p style={{ margin: '5px 20px 0 0', fontSize: '14px', color: '#e0e0e0' }}>{task.description}</p>
                </div>
                
                <div >
                    <IconButton onClick={taskCompleted} sx={task.IsCompleted ?CheckIconStyleTrue : CheckIconStyleFalce} aria-label="complete" size="small" color="primary" >
                        <CheckIcon />
                    </IconButton>

                    <IconButton onClick={HandleEditClick} sx={EditIconStyle} aria-label="edit" size="small" color="success" >
                        <BorderColorIcon />
                    </IconButton>
                    
                    <IconButton onClick={HandleDeleteClick} sx={DeleteIconStyle} aria-label="delete" size="small" color="warning" >
                        <DeleteIcon />
                    </IconButton>
                </div>
            </Card>
            {/* عرض Snackbar بعد تحديث المهمة */}
            {OpenSnackBar && <CustomizedSnackbar 
                open={OpenSnackBar} 
                CloseSnackbar={() => SetOpenSnackBar(false)} 
                massage={task.IsCompleted ? `Task (${task.title}) was successfully completed` : `Task (${task.title}) is still active` }
                background= {task.IsCompleted ?'#2f8033':'#8e3636'}
            />}
        </>
    );
}