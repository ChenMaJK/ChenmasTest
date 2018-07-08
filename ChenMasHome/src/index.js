import React from 'react';
import { render } from 'react-dom';
//css
import css from './index.css';
//module
import {Header,Content,Left,Right} from './modules/layout/layout'
import {Dropdown,Button} from './modules/pinion/button/button'
import PageA from './page/pageA'
import PageB from './page/pageB'

class App extends React.Component
{
    state={
        page:"1"
    }
    bind=(tag)=>{
        this.setState({page:tag});
    }
    render(){
        return (        
            <div className={css.app}>
                <Header>
                    <span className={css.title}>WelCometo ChenMas HomePage</span> {/* H1 会撑开 */}
                </Header>
                <Content>
                    <Left className={css.left}>
                        <Dropdown faceStr="page">
                            <Button onClick={()=>{this.bind(<PageA/>)}}>pageA</Button>
                            <Button onClick={()=>{this.bind(<PageB/>)}}>pageB</Button>
                        </Dropdown>
                    </Left>
                    <Right className={css.right} >
                        {this.state.page}
                    </Right>   
                </Content>
            </div>
        )
    }


}        
render(
    <App/>
    ,
    document.getElementById('app')
);