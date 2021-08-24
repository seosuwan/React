import React from "react"
import {Route, Redirect ,Switch} from 'react-router-dom'
import OnlineProfile from './components/OnlineProfile';
import Login from './components/Login';
import SchoolStatus from './components/SchoolStatus';
import Color from './components/Color';
import ImageMap from './components/ImageMap';
import CousreRegister from './components/CousreRegister';
import Join from './components/Join';
import Home from './components/Home';


const App = () => ( //jsx로 변환
    
    <Switch>
    <Redirect from='/Home' to= {'/'}/>
    <Route exact path='/' component= {Home}/>
    <Route exact path='/ImageMap' component = {ImageMap}/>
    <Route exact path='/OnlineProfile' component ={OnlineProfile}/>
    <Route exact path='/Login' component ={Login} />
    <Route exact path='/SchoolStatus' component = {SchoolStatus}/>
    <Route exact path='/Color' component ={Color}/>
    <Route exact path='/CousreRegister' component ={CousreRegister}/>
    <Route exact path='/Join' component= {Join}/>
  
    </Switch>
  );


export default App;
