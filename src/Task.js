import './App.css';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import ButtonGroup from '@mui/material/ButtonGroup';
import CheckIcon from '@mui/icons-material/Check';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Task({ title = "Task Title", description = "Task description goes here..." }) {
    let iconStyle = {
        backgroundColor: '#ffffff',
        marginRight: '10px',
        '&:hover': {
            backgroundColor: '#e0e0e0',
        }
    }
    return (
        <div>
            <Card sx={{ 
                backgroundColor: '#1976d2',
                color: 'white', 
                width: 400, 
                margin: '20px auto',
                padding: '15px',
                borderRadius: '8px',
                display: 'flex',
                transition: 'transform 0.3s ease-in-out',
                transformOrigin: 'top',
                '&:hover': {
                    transform: 'scaleY(1.05)', 
                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',  
                }
            }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 100px 0 0' }}>{title}</h3>
                    <p style={{ margin: '5px 20px 0 0', fontSize: '14px', color: '#e0e0e0' }}>{description}</p>
                </div>
                
                <div >
                    <IconButton sx={iconStyle} aria-label="edit" size="small" color="success" >
                        <BorderColorIcon />
                    </IconButton>

                    <IconButton sx={iconStyle} aria-label="complete" size="small" color="primary" >
                        <CheckIcon />
                    </IconButton>

                    <IconButton sx={iconStyle} aria-label="delete" size="small" color="warning" >
                        <DeleteIcon />
                    </IconButton>
                </div>
                
            </Card>
        </div>
    );
}