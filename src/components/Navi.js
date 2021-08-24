import React from 'react';
import { Link } from 'react-router-dom';

const Navi = () => (
    <div>
        <nav class='navi'>
        <ul>
            <li><Link to='./Home'>Home</Link></li>
            <li><Link to='./ImageMap'>ImageMap</Link></li>
            <li><Link to='./Join'>Join</Link></li>
            <li><Link to='./Login'>Login</Link></li>
        </ul>
        </nav>
        </div>
)

export default Navi