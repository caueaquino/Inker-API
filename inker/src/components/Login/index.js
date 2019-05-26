import React, { Component } from 'react'

import './styles.css';

import TextField from '@material-ui/core/TextField';
import { Fab } from '@material-ui/core';

export default class index extends Component {
    render() {
        return (
            <section id="login-container">
                <h1>LOGIN</h1>
                <TextField
                    required
                    id="standard-required"
                    label="E-mail"
                    style={{marginTop: 30}}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    required
                    id="standard-password-input"
                    label="Senha"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                />
                <Fab
                    variant="extended"
                    size="large"
                    style={{marginTop: 30}}
                    color="white"
                    id="bt-login"
                >
                    Entrar
                </Fab>
                <Fab
                    variant="extended"
                    size="large"
                    style={{marginTop: 10}}
                    color="white"
                    id="bt-register"
                >
                    Cadastrar-se
                </Fab>
                <a></a>
            </section>
        )
    }
}
