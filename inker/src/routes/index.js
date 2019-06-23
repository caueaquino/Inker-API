import React, { Component } from 'react'
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'

import Home from '../pages/Home'

import Main from '../pages/Main'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() =>
                        <Redirect to="/home"/>
                    }/>
                    <Route path="/home" component={Home} />
                    <Route path="/inker" component={Main} />
                </Switch>
            </BrowserRouter>
        )
    }
}
