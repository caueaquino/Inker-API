import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Fab, TextField, Button } from '@material-ui/core';
import logo from '../../assets/images/FullLogo.png';

import "./styles.css"

export default class Recover extends Component {
    state ={
        email: ""
    }

    changeHandler = e =>{
        this.setState({email: e.taget.value});
        
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
                <form action={`https://formspree.io/${this.state.email}`} method="POST">
                    <TextField
                        required
                        id="email-input"
                        //onChange={this.changeHandler}
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
                                
                                size="medium"
                                id="bt-cancel-recover"
                            >
                                Cancelar
                            </Button>
                        </Link>
                        <a href="mailto:?subject=Assunto do email&amp;body=Olá,%0D%0A%0D%0A[corpo do email]%0D%0A%0D%0AAtenciosamente,%0D%0A[nome do usuário]" style={{textDecoration: 'none'}}>
                            <Fab
                                variant="extended"
                                size="large"
                                style={{ marginLeft: 10 }}
                                id="bt-confirm-recover"
                            >
                                Confirmar
                            </Fab>
                        </a>
                    </footer>
                </form>
            </section>
        )
    }
}
