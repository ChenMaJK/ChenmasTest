import React from 'react';
import { render } from 'react-dom';
//css
import css from './index.css';
//module
import {Header,Content,Left,Right} from './modules/layout/layout'
import Dorpdown,{Button} from './modules/pinion/dorpdown/dropdown'

render(
    <div className={css.app}>
        <Header>
            <span className={css.title}>WelCometo ChenMas HomePage</span> {/* H1 会撑开 */}
        </Header>
        <Content>
            <Left className={css.left}>
                <Dorpdown faceStr="D1">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                </Dorpdown>
                <Dorpdown faceStr="D2">
                    <Button>2</Button>
                    <Button>3sss</Button>
                    <Dorpdown faceStr="D21">
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                    </Dorpdown>
                </Dorpdown>
                <Dorpdown faceStr="D3">
                    <Button>1</Button>
                </Dorpdown>
                <Dorpdown faceStr="D4"/>
            </Left>
            <Right className={css.right}>
            </Right>   
        </Content>

    </div>
    ,
    document.getElementById('app')
);
