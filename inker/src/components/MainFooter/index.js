import React, { Component } from 'react'

import './styles.css'

import Card from '@material-ui/core/Card'

export default class MainFooter extends Component {
    render() {
        return (
            <Card id="main-footer">
                <span id="span-footer">Copyright - Inker © 2019</span>
                <div id="div-footer"></div>
            </Card>
        )
    }
}
