import React, { Component } from 'react';
import { render } from 'react-dom';

import layout from './layout.css';

export class Header extends Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={layout.header}>
                {this.props.children}
            </div>
        );
    }
}
export class Content extends Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={ layout.content + " " + this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export class Left extends Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={layout.left+" "+this.props.className}>
                {this.props.children}
            </div>
        );
    }
}
export class Right extends Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={layout.right +" "+this.props.className}>
                {this.props.children}
            </div>
        );
    }
}