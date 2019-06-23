import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import './styles.css'

import MainAppBar from '../../components/MainAppBar'
import Timeline from '../../components/Timeline'
import Perfil from '../../components/Perfil'
import EditPerfil from '../../components/EditPerfil'
const Main = () => {
    return (
        <section id="main">
            <MainAppBar></MainAppBar>
            
            <Route exact path="/inker" render={() =>
                <Redirect to="/inker/timeline"/>
            }/>

            <Route path="/inker/timeline" component={Timeline} />
            <Route path="/inker/timeline-software" component={Timeline} />
            <Route path="/inker/timeline-analise" component={Timeline} />
            <Route path="/inker/timeline-eletrica" component={Timeline} />
            <Route path="/inker/timeline-mecanica" component={Timeline} />
            <Route path="/inker/timeline-automacao" component={Timeline} />
            <Route path="/inker/timeline-matematica" component={Timeline} />
            <Route path="/inker/perfil" component={Perfil} />
            <Route path="/inker/edit-perfil" component={EditPerfil} />
        </section>
    )
}

export default Main;
