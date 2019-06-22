import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import Login from '../../components/Login'
import Register from '../../components/Register'

import './styles.css';

const Home = () => {
    return (
        <section id="home">
            <Route exact path="/" render={() =>
                <Redirect to="/login"/>
            }/>

            <Route path="/login" component={Login} />
        
            <Route path="/register" component={Register} />
       
        </section>
    )
}
export default Home;