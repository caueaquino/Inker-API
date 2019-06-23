import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import './styles.css'

import MainAppBar from '../../components/MainAppBar'
import Timeline from '../../components/Timeline'

const Main = () => {
    return (
        <section id="main">
            <MainAppBar></MainAppBar>

            <Route exact path="/inker" render={() =>
                <Redirect to="/inker/timeline"/>
            }/>

            <Route path="/inker/timeline" component={Timeline} />
        
        </section>
    )
}

export default Main;
