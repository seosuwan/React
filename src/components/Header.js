import React, { Component } from 'react';
import styled from 'styled-components';

const Header = () => (

        <Container>
            <Element>
                <ShortCut>서수완</ShortCut>
                <Logo>
<img
width="100%"
height="100%"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8zYDt6Hrc2nvlpItxl3ao5-QQFgbrHno-9w&usqp=CAU"
alt="logo"/>
</Logo>
                <Search><h1>리액트</h1></Search>
            </Element>
        </Container>
);
    
  
  
export default Header;

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #d1d8e4;
`

const Element = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`

const ShortCut = styled.div`
    order: 1;
    width: 100%;
    height: 20px;
    text-align: right;
`

const Logo = styled.div`
    order: 2;
    width: 200px;
    height: 80px;
`

const Search = styled.div`
    order: 3;
    width: 880px;
    text-align: center;
`