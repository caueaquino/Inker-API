import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';

import './styles.css';

export default class index extends Component {
    batata = {
        a : 'aasd'
    }

    render() {
        return (
            <section id="login-container">
                <h1>Login</h1>
                <TextField
                    id="input-email"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder="Insira seu E-mail"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </section>
        )
    }
}
