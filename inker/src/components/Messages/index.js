import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Badge from '@material-ui/core/Badge'
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

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
        height: '100vh',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
    },
}));

export default function Messages() {
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
            <IconButton color="inherit" onClick={handleOpen}>
              <Badge badgeContent={0} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <header id="header-not">
                        <h1>Mensagens</h1>

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

                    <section id="body-not">
                        <h2>Nenhuma Mensagem Encontrada!</h2>
                    </section>
                    
                    <footer id="foot-not">
                        <span id="span-footer">Copyright - Inker © 2019</span>
                        <div id="div-footer"></div>
                    </footer>
                </div>
            </Modal>
        </div>
    );
}
