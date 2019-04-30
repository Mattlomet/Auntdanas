import React from 'react'
import Logo from '../assets/logo.jpg'

function Banner(){
    return(
        <div className="hero is-small is-bold coloredBG">
            <div class="hero-body">
    <div class="container">
      <h2 class="subtitle ">
        <img src={Logo} className="roundLogo"/>
      </h2>
      {/* <h2 class="subtitle">
        Peace Love BreastFeeding
      </h2> */}
    </div>
  </div>
        </div>
    )
}

export default Banner;








//this will be the banner that goes across the top of website for the homepage