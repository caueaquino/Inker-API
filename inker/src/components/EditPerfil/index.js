import React, { Component } from 'react'
import Card from "@material-ui/core/Card"
import MainFooter from "../MainFooter"
import {Link} from 'react-router-dom'

import { Fab, TextField, Button } from '@material-ui/core';

import "./styles.css"

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
        label: 'Matemática',
    }
];

export default class EditPerfil extends Component {
    render() {
        return (
            <section id="edit-perfil">
                <Card className="card-top">
                    <h1>Editar Perfil</h1>
                </Card>
                <Card className="card-post" id="edit-block" >
                    <div className="edit-perfil-div">
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
                            required
                            id="email-input"
                            label="E-mail"
                            style={{ marginTop: 40 }}
                            margin="normal"
                            fullWidth
                        />

                    </div>
                    <div className="edit-perfil-div">
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
                        
                    </div>
                    <div id="edit-fot">    
                            <Link 
                                to="/home/login"
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
                        </div>
                </Card>
                <MainFooter/>
            </section>
        )
    }
}
