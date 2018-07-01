import React from 'react';
import { render } from 'react-dom';
//css
import index from './index.css';
//module
import Header from './modules/layout/layout'
render(
    <div className={index.test}>
        <Header/>

        {/* </Header> */}
        {/* <Content>
            <Left>

            </Left>
            <Right>

            </Right>   
        </Content> */}

    </div>
    ,
    document.getElementById('app')
);
