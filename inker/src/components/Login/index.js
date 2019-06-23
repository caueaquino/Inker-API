import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './styles.css';

import logo from '../../assets/images/FullLogo.png';

import TextField from '@material-ui/core/TextField';
import { Fab } from '@material-ui/core';


export default class index extends Component {
    render() {
        return (
            <section id="login-container">
                
                <img 
                    width="230"
                    height="115"
                    src={logo} 
                    alt="logo inker"
                >
                </img>
                
                <h1>
                    LOGIN
                </h1>
                <form>
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
                    <Link 
                        to="/inker"
                        style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Fab
                            variant="extended"
                            size="large"
                            style={{marginTop: 40}}
                            id="bt-login"
                        >
                            Entrar
                        </Fab>
                    </Link>
                </form>    

                <Link 
                    to="/home/register"
                    style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                >
                    <Fab 
                        variant="extended"
                        size="large"
                        style={{marginTop: 20}}
                        id="bt-register"
                    >
                        Cadastrar-se
                    </Fab> 
                </Link>
                
                <Link 
                    to="/home/recover"
                    style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                >
                    <button 
                        id="bt-recover"
                    >
                        Esqueceu a senha?
                    </button>
                </Link>
            </section>
        )
    }
}
