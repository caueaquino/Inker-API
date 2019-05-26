import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Fab, TextField, Button } from '@material-ui/core';

import './styles.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 40,
    outline: 'none',
    borderRadius : 40,
    boxAlign: "center",
  },
}));

const studyAreas = [
    {
        value: '0',
        label: 'Software',
    },
    {
        value: '1',
        label: 'Análise',
    },
    {
        value: '2',
        label: 'Elétrica',
    },
    {
        value: '3',
        label: 'Mecânica',
    },
    {
        value: '4',
        label: 'Automação',
    },
    {
        value: '5',
        label: 'matemática',
    }
];

const RegisterModal = () => {
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    return (
        <>
      
            <Fab 
                variant="extended"
                size="large"
                style={{marginTop: 20}}
                id="bt-register"
                onClick={handleOpen}
            >
                Cadastrar-se
            </Fab>
        
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
        
                <div 
                    style={modalStyle} 
                    className={classes.paper}
                    id="register-modal"
                >
                    <header id="header-register">

                        <h1>
                            Cadastro
                        </h1>
                    
                    </header>

                    <section id="section-register">

                        <TextField
                            required
                            id="email-input"
                            label="E-mail"
                            style={{marginTop: 40}}
                            margin="normal"
                            fullWidth
                        />

                        <TextField
                            required
                            id="password-input"
                            label="Senha"
                            style={{marginTop: 30}}
                            margin="normal"
                            fullWidth
                            password
                        />

                        <TextField
                            id="standard-select-currency-native"
                            select
                            styles={{marginTop: 30}}
                            label="Curso"
                            className={classes.textField}
                            SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                            }}
                            margin="normal"
                        >
                            {studyAreas.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                            ))}
                        </TextField>

                        <TextField
                            required
                            id="name-input"
                            label="Nome"
                            style={{marginTop: 30}}
                            margin="normal"
                            fullWidth
                        />

                        <TextField
                            id="lastname-input"
                            label="Sobrenome"
                            style={{marginTop: 30}}
                            margin="normal"
                            fullWidth
                        /> 

                        <TextField
                            id="avatar-input"
                            label="URL Avatar"
                            style={{marginTop: 30}}
                            margin="normal"
                            fullWidth
                        /> 

                        <TextField
                            id="age-input"
                            label="Idade"
                            style={{marginTop: 30}}
                            margin="normal"
                            type="number"
                            fullWidth
                        /> 

                        <TextField
                            id="email-input"
                            label="Telefone"
                            style={{marginTop: 30}}
                            margin="normal"
                            type="phone"
                            fullWidth
                        /> 
                    </section>
                    
                    <footer id="footer-register">
                        
                        <Button
                            variant="extended"
                            size="medium"
                            id="bt-cancel"
                            onClick={handleClose}
                        >
                            Cancelar
                        </Button>
                    
                        <Fab 
                            variant="extended"
                            size="large"
                            style={{marginLeft: 10}}
                            id="bt-confirm"
                            onClick={handleClose}
                        >
                            Confirmar
                        </Fab>

                    </footer>
                
                </div>
        
            </Modal>
        
        </>
    );
}

export default RegisterModal;
