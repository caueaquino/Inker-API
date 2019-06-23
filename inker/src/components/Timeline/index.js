import React, { Component } from 'react'

import './styles.css'

import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export default class Timeline extends Component {
    
    render() {
        return (
            <section id="timeline">
                <Card className="card-top">
                    <h1>Mural Geral</h1>
                    
                    <Fab id="add-bt" color="secondary" aria-label="Add" style={{position: 'absolute', left: '18%', top:'217px'}}>
                        <AddIcon />
                    </Fab>
                </Card>

                <Card className="card-post">
                    <header>

                    </header>

                    <section>
                        <h2>Nenhum post foi encontrado!</h2>
                    </section>

                    <footer>

                    </footer>
                </Card>

                <Fab id="up-bt" color="primary" aria-label="ArrowTop" style={{position: 'fixed', right: '5%', bottom:'100px'}}>
                    <ArrowDropUpIcon />
                </Fab>
                
            </section>
        )
    }
}
