import React, { Component } from 'react'
import Card from "@material-ui/core/Card"
import MainFooter from "../MainFooter"

import "./styles.css"

export default class Perfil extends Component {
    render() {
        return (
            <section id="main-perfil">
                <Card className="card-top">
                    <h1>Perfil do Usuário</h1>
                </Card>
                <Card className="card-post" id="perfil-block" >
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0eNKTXF3c7bSQWyvs4OwCqtS1_R2YzxwxAN3CXrF_-j4QU4K5" alt="imagem do avatar"/>
                        <h2>Nome: Leonardo</h2>
                        <h3>Sobrenome: Norio</h3>
                    </div>
                    <div>
                        <form>
                            <p>Email: leonardocruz@alunos.utfpr.edu.br</p>
                            <p>Idade: 21</p>
                            <p>Curso: Software</p>
                            <p>Telefone: 9662-4563</p>
                        </form>
                    </div>
                </Card>
                <MainFooter/>
            </section>
        )
    }
}
