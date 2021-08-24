import React from 'react'
import logo from '../imges/first.jpg'
import Navi from './Navi'



const Home = () => (
    <div>
        <Navi/>
    <h1>인생이란...</h1>
    <p>&lt;내일 죽을 것처럼 오늘을 살고
        영원히 살 것처럼 내일을 꿈꾸어라.&gt;</p>
      <img src={logo} />
  </div>
)

export default Home