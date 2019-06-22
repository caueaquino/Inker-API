import React from 'react';
import {Link} from 'react-router-dom'

import { Fab, TextField, Button } from '@material-ui/core';

import './styles.css';


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
    return (
        <>
            <div
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
                        style={{ marginTop: 40 }}
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

                    <TextField
                        id="standard-select-currency-native"
                        select
                        styles={{ marginTop: 30 }}
                        label="Curso"
                        SelectProps={{
                            native: true,
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
                        style={{ marginTop: 30 }}
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        id="lastname-input"
                        label="Sobrenome"
                        style={{ marginTop: 30 }}
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        id="avatar-input"
                        label="URL Avatar"
                        style={{ marginTop: 30 }}
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        id="age-input"
                        label="Idade"
                        style={{ marginTop: 30 }}
                        margin="normal"
                        type="number"
                        fullWidth
                    />

                    <TextField
                        id="email-input"
                        label="Telefone"
                        style={{ marginTop: 30 }}
                        margin="normal"
                        type="phone"
                        fullWidth
                    />
                </section>

                <footer id="footer-register">
                    <Link 
                        to="/login"
                        style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Button
                            variant="extended"
                            size="medium"
                            id="bt-cancel"
                        >
                            Cancelar
                        </Button>
                    </Link>

                    <Fab
                        variant="extended"
                        size="large"
                        style={{ marginLeft: 10 }}
                        id="bt-confirm"
                    >
                        Confirmar
                    </Fab>

                </footer>

            </div>
        </>
    );
}

export default RegisterModal;
