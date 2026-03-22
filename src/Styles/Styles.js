export let CheckIconStyleTrue = {
    backgroundColor:  '#04f629' ,
    color:  '#ffffff' ,
    border : '2px solid #ffffff' ,
    marginRight: '10px',
    boxShadow: '0 7px 7px rgba(0,0,0,0.7)',
    '&:hover': {
        backgroundColor: '#21bb19',
    }
}

export let CheckIconStyleFalce = {
    backgroundColor:  '#ffffff',
    color: '#04f629',
    border : '2px solid #04f629',
    marginRight: '10px',
    boxShadow: '0 7px 7px rgba(0,0,0,0.7)',
    '&:hover': {
        backgroundColor: '#e0e0e0',
    }
}

export let EditIconStyle = {
    backgroundColor: '#ffffff',
    color: '#057ef7',
    marginRight: '10px',
    boxShadow: '0 7px 7px rgba(0,0,0,0.7)',
    '&:hover': {
        backgroundColor: '#e0e0e0',
    }
}

export let DeleteIconStyle = {
    backgroundColor: '#ffffff',
    color: '#f44336',
    marginRight: '10px',
    boxShadow: '0 7px 7px rgba(0,0,0,0.7)',
    '&:hover': {
        backgroundColor: '#e0e0e0',
    }
}

export let AddTaskDialogStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 400 },
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    p: 4,
    zIndex: 1300,
};

export let DeleteDialogstyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 400 },
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    p: 4,
    zIndex: 1300,
};

export let UpdateDialogstyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 400 },
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    p: 4,
    zIndex: 1300,
};

export let TaskStyle =  {
    backgroundColor: '#033566',
    color: 'white', 
    width: { xs: '100%', sm: 400 }, 
    margin: '15px auto',
    padding: '15px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    transformOrigin: 'top',
    '&:hover': {
        transform: 'scaleY(1.05)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
    }
}

export let CardContentStyle = {
    width: { xs: '95%', sm: 500 }, 
    m: "20px auto", 
    position: 'relative', 
    minHeight: 400, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    pb: 10
}

export let CardHeaderSX = { width: { xs: '95vw', sm: '80vw', md: 600 }, maxWidth: '100%' }

export let CardHeaderStyle = {maxHeight: "80vh",overflow:"scroll"}