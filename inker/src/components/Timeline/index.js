import React, { Component } from 'react'

import './styles.css'

import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import CreatePost from '../CreatePost';

export default class Timeline extends Component {
    
    render() {
        return (
            <section id="timeline">
                <Card className="card-top">
                    <h1>Feed Principal</h1>
                    
                    <CreatePost></CreatePost>
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
