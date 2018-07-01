import React, { Component } from 'react';
import { render } from 'react-dom';

import layout from './layout.css';

export default class Header extends Component
{
    constructor(props){
        super(props);
        // this.handleClick2 = this.handleClick2.bind(this)
    }
    handleClick = () =>{
        // e.preventDefault();
        console.log("嘿嘿")
    }
    render(){
        return(
            <div onClick={this.handleClick}>
            </div>
        );
    }
}