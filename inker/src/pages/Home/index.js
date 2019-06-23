import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import Login from '../../components/Login'
import Register from '../../components/Register'
import Recover from '../../components/Recover'

import './styles.css';

const Home = () => {
    return (
        <section id="home">
            <Route exact path="/home" render={() =>
                <Redirect to="/home/login"/>
            }/>

            <Route path="/home/login" component={Login} />
        
            <Route path="/home/register" component={Register} />
       
            <Route path="/home/recover" component={Recover} />
        </section>
    )
}
export default Home;