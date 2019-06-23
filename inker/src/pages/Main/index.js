import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import './styles.css'

import MainAppBar from '../../components/MainAppBar'
import Timeline from '../../components/Timeline'
import Perfil from '../../components/Perfil'

const Main = () => {
    return (
        <section id="main">
            <MainAppBar></MainAppBar>
            
            <Route exact path="/inker" render={() =>
                <Redirect to="/inker/timeline"/>
            }/>

            <Route path="/inker/timeline" component={Timeline} />
            <Route path="/inker/software" component={Timeline} />
            <Route path="/inker/analise" component={Timeline} />
            <Route path="/inker/eletrica" component={Timeline} />
            <Route path="/inker/mecanica" component={Timeline} />
            <Route path="/inker/automacao" component={Timeline} />
            <Route path="/inker/matematica" component={Timeline} />
            <Route path="/inker/perfil" component={Perfil} />
        </section>
    )
}

export default Main;
