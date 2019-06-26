import React, { Component } from 'react'

import './styles.css'

import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import FavoriteIcon from '@material-ui/icons/Favorite'

import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes'
import CreatePost from '../CreatePost';
import MainFooter from '../MainFooter';

export default class Timeline extends Component {

    state = {
        feed: "",
        posts: ['teste 1','teste 2']
    }

    createPost(text){
        this.state.posts.push(text);
    }

    componentDidMount(){
        var teste = window.location.pathname
        var teste2 = teste.split('timeline-')
        teste2 = teste2[1]
        if(teste2 === "software"){
            this.setState({feed: "Software"})
            
        }
        else if(teste2 === "analise"){
            this.setState({feed: "Análise"})
        }
        else if(teste2 === "eletrica"){
            this.setState({feed: "Elétrica"})
        }
        else if(teste2 === "mecanica"){
            this.setState({feed: "Mecânica"})
        }
        else if(teste2 === "automacao"){
            this.setState({feed: "Automação"})
        }
        else if(teste2 === "matematica"){
            this.setState({feed: "Matemática"})
        }
        else{
            this.setState({feed: "Principal"})
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

                    <section id="sec-post">
                        {this.state.posts.map(post => {
                            return <Card id="posts-card" style={{backgroundColor: 'rgb(204, 204, 204)', padding: 0}}>
                                        <header>
                                            Leonardo Norio
                                        </header>

                                        <h2>
                                            {post}
                                        </h2>

                                        <footer>
                                            <button><FavoriteIcon style={{marginRight: '20px'}}></FavoriteIcon>CURTIR</button>
                                            <button><SpeakerNotesIcon style={{marginRight: '20px'}}></SpeakerNotesIcon>COMENTAR</button>
                                        </footer>
                                    </Card>
                        })}
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
