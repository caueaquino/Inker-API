import React, { Component } from 'react'

import './styles.css'

import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import CreatePost from '../CreatePost';
import MainFooter from '../MainFooter';

export default class Timeline extends Component {

    state = {
        feed: ""
    }

    componentDidMount(){
        var teste = window.location.pathname
        var teste2 = teste.split('timeline-')
        teste2 = teste2[1]
        if(teste2 == undefined){
            this.setState({feed: "Principal"})
            
        }
        else{
            this.setState({feed: teste2})
        }
    }
    render() {
        return (
            <section id="timeline">
                <Card className="card-top">
                    <h1>Feed {this.state.feed}</h1>
                    
                    <CreatePost></CreatePost>
                </Card>

                <Card className="card-post">
                    <header>

                    </header>

                    <section>
                        <h2>Nenhum post foi encontrado!</h2>
                    </section>

                    <footer></footer>
                </Card>

                <MainFooter></MainFooter>

                <Fab id="up-bt" color="primary" aria-label="ArrowTop" style={{position: 'fixed', right: '5%', bottom:'100px'}}>
                    <ArrowDropUpIcon />
                </Fab>
                
            </section>
        )
    }
}
