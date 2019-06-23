import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from 'react-router-dom'
import CancelIcon from '@material-ui/icons/Cancel'

import './styles.css'

function getModalStyle() {

    return {
        top: `${0}%`,
        left: `${0}%`
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'fixed',
        width: 250,
        height: '100vh',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
        padding: 0,
    },
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SideBar() {
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
            <IconButton
                onClick={handleOpen}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="Open drawer"
            >
                <MenuIcon />
            </IconButton>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <header>

                    </header>

                    <section id="menu-side">
                        <Link
                            to="/inker/timeline"
                            className="itens-side"
                            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(255,0,76)' }}
                        >
                            Principal
                        </Link>

                        <Link
                            to="/inker/timeline-software"
                            className="itens-side"
                            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(255,0,76)' }}
                        >
                            Software
                        </Link>
                    
                        <Link
                            to="/inker/timeline-analise"
                            className="itens-side"
                            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(255,0,76)' }}
                        >
                            Análise
                        </Link>

                        <Link
                            to="/inker/timeline-eletrica"
                            className="itens-side"
                            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(255,0,76)' }}
                        >
                            Elétrica
                        </Link>

                        <Link
                            to="/inker/timeline-mecanica"
                            className="itens-side"
                            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(255,0,76)' }}
                        >
                            Mecânica
                        </Link>

                        <Link
                            to="/inker/timeline-automacao"
                            className="itens-side"
                            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(255,0,76)' }}
                        >
                            Automação
                        </Link>
                        
                        <Link
                            to="/inker/timeline-matematica"
                            className="itens-side"
                            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(255,0,76)' }}
                        >
                            Matemática
                        </Link>
                        <button id="bt-close-side" className="itens-side" onClick={handleClose}>
                            <CancelIcon></CancelIcon>Fechar
                        </button>
                    </section>
                </div>
            </Modal>
        </div>
    );
}
