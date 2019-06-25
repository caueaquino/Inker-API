import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { IconButton, TextField } from '@material-ui/core';
import DuoIcon from '@material-ui/icons/Duo'
import CancelIcon from '@material-ui/icons/Cancel';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'

import './styles.css'

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
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
        // eslint-disable-next-line no-dupe-keys
        padding: 0,
    },
}));

export default function CreatePost() {
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
        <div>
            <Fab onClick={handleOpen} id="add-bt" color="secondary" aria-label="Add" style={{ position: 'absolute', left: '18%', top: '217px' }}>
                <AddIcon />
            </Fab>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <header id="header-not">
                        <h1>Criar Post</h1>

                        <IconButton
                            onClick={handleClose}
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Open drawer"
                        >
                            <CancelIcon style={{ height: '50px', width: '50px' }} color="secondary"></CancelIcon>
                        </IconButton>
                    </header>

                    <section id="body-post">
                        <div id="abc-uhul">
                            <DuoIcon style={{marginTop: 10, height:50, width: 50, marginRight: 10}} color="secondary" id="icons-post"></DuoIcon>
                            <InsertPhotoIcon style={{marginTop: 10, height:50, width: 50, marginLeft: 10}} color="secondary" id="icons-post"></InsertPhotoIcon>
                        </div>

                        <TextField
                            id="outlined-multiline-flexible"
                            label="Texto do Post"
                            multiline
                            rows="12"
                            style={{width: '90%', minHeight: '300px'}}
                            className={classes.textField}
                            margin="normal"
                            helperText="Insira o texto acima"
                            variant="outlined"
                        />

                        <button>
                            Confirmar
                        </button>
                    </section>
                </div>
            </Modal>
        </div>
    );
}
