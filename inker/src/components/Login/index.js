import React, { Component } from 'react'

import './styles.css';

import logo from '../../assets/images/FullLogo.png';

import TextField from '@material-ui/core/TextField';
import { Fab } from '@material-ui/core';

import RegisterModal from '../Register/index'

export default class index extends Component {
    render() {
        return (
            <section id="login-container">
                
                <img 
                    width="100"
                    src={logo} 
                    alt="logo inker"
                >
                </img>
                
                <h1>
                    LOGIN
                </h1>
                
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
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                />
                
                <Fab
                    variant="extended"
                    size="large"
                    style={{marginTop: 40}}
                    id="bt-login"
                >
                    Entrar
                </Fab>
                
                <RegisterModal>
                </RegisterModal>

                <button 
                    id="bt-recover"
                >
                    Esqueceu a senha?
                </button>
            
            </section>
        )
    }
}
