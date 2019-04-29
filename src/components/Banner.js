import React from 'react'
import Logo from '../assets/logo.jpg'

function Banner(){
    return(
        <div className="hero is-small is-light is-bold">
            <div class="hero-body">
    <div class="container">
      <h1 class="title">
        <img src={Logo}/>
      </h1>
      <h2 class="subtitle">
        Peace Love BreastFeeding
      </h2>
    </div>
  </div>
        </div>
    )
}

export default Banner;








//this will be the banner that goes across the top of website for the homepage