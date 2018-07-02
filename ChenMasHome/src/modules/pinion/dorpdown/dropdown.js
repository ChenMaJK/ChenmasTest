import React,{Component} from  'react';
import { render } from 'react-dom';
//css
import css from './dropdown.css';

export default class Dropdown extends Component
{
    clickNum = 1;
    state={
        display:"block"
    }
    constructor(props){
        super(props);
    }
    handleDisplay = (e)=>{
        e.preventDefault();
        if(this.clickNum++%2){
            this.setState({
                display:"none"
            })
        }else{
            this.setState({
                display:"block"
            })
        }
    }
    render(){
        return(
            <div className={css.dropdown}>
                <div 
                    className={css.face} 
                    onClick={this.handleDisplay} 
                    onSelectstart={()=>{return false}}
                >
                    dropdown
                </div>
                <div className={css.down} style={{display:this.state.display}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export class Button extends Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={css.button}>
                {this.props.children}
            </div>
        )
    }
}