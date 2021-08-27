import React from "react"
import {Route, Redirect ,Switch} from 'react-router-dom'
import {Header,OnlineProfile,
    Login,SchoolStatus,Color,
    ImageMap,CousreRegister,
    Join} from 'components/index';
import styled from "styled-components";
import {HomePage} from "pages/index";




const App = () => ( //jsx로 변환

    <>
    <Header/>
    <Switch>
    <Redirect from='/HomePage' to= {'/'}/>     
    <Route exact path='/' component= {HomePage}/>
    <Route exact path='/ImageMap' component = {ImageMap}/>
    <Route exact path='/OnlineProfile' component ={OnlineProfile}/>
    <Route exact path='/Login' component ={Login} />
    <Route exact path='/SchoolStatus' component = {SchoolStatus}/>
    <Route exact path='/Color' component ={Color}/>
    <Route exact path='/CousreRegister' component ={CousreRegister}/>
    <Route exact path='/Join' component= {Join}/>
    <Route exact path='/Header' component={Header}/>
    
    

  
    </Switch>
    </>
  );

  const Layout = styled.div`
    font-family: "Klee One";
    margin: 0 auto;
    display: flex;
    width: 100%
    flex-flow: row wrap;
    color : red;
  `


export default App;
