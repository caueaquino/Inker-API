import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Fab, TextField, Button } from '@material-ui/core';
import logo from '../../assets/images/FullLogo.png';

import "./styles.css"

export default class Recover extends Component {
    state ={
        email: ""
    }
    render(){
        return (
            <section id="recover">
                <img 
                    width="230"
                    height="115"
                    src={logo} 
                    alt="logo inker"
                >
                </img>
                
                <h1>Recuperar Senha</h1>
                <form action="https://formspree.io/email@domain.tld" method="POST">
                    <TextField
                        required
                        id="email-input"
                        label="E-mail"
                        style={{marginTop: 40}}
                        margin="normal"
                        fullWidth
                    />
                    <footer id="footer-recover">
                        <Link 
                            to="/home/login"
                            style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        >
                            <Button
                                variant="extended"
                                size="medium"
                                id="bt-cancel-recover"
                            >
                                Cancelar
                            </Button>
                        </Link>

                        <Fab
                            variant="extended"
                            size="large"
                            style={{ marginLeft: 10 }}
                            id="bt-confirm-recover"
                        >
                            Confirmar
                        </Fab>
                    </footer>
                </form>
            </section>
        )
    }
}
