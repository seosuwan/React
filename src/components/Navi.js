import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navi = () => (
    <div>
        <NavList>
        <NavList>
            <NavItem><Link to='./Home'>Home</Link></NavItem>
            <NavItem><Link to='./ImageMap'>ImageMap</Link></NavItem>
            <NavItem><Link to='./Join'>Join</Link></NavItem>
            <NavItem><Link to='./Login'>Login</Link></NavItem>
            <NavItem><Link to='./SchoolStatus'>SchoolStatus</Link></NavItem>
            <NavItem><Link to='./OnlineProfile'>OnlineProfile</Link></NavItem>
            <NavItem><Link to='./Color'>Color</Link></NavItem>
        </NavList>
        </NavList>
        </div>
)

export default Navi


const Nav = styled.div`
    width:100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
    
    
`

const NavList = styled.ul`
    width: 1080;
    display: flex;
    margin: 0 auto;
    background-color: ;
    
`
const NavItem = styled.li`
    width: 150px;
    margin-left: 20px;
    margin-top: 30px
    display: flex;
    color: red;
    
`