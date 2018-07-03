import React,{Component} from  'react';
import { render } from 'react-dom';
//css
import css from './dropdown.css';

export default class Dropdown extends Component
{
    downHeight = 0;
    state={
        display:css.show,
        downHeight:"auto"
    }

    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.downHeight = this.refs.down.offsetHeight;
        this.setState({downHeight : this.downHeight})
    }
    handleDisplay = (e)=>{
        e.preventDefault();
        if(this.state.display==css.show){
            this.setState({
                display:css.hidden,
                downHeight:0
            })
        }else{
            this.setState({
                display:css.show,
                downHeight:this.downHeight
            })
        }
    }
    render(){
        return(
            <div ref="dropdown" className={css.dropdown}>
                <div 
                    className={css.face} 
                    onClick={this.handleDisplay} 
                    onSelectstart={()=>{return false}}
                >
                    {this.props.faceStr==undefined?"DorpDown":this.props.faceStr}
                </div>
                <div 
                    ref = "down"
                    className={css.down+" "+this.state.display} 
                    style={{maxHeight:this.state.downHeight}}
                >
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