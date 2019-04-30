import React, {Component} from 'react'

class NavBar extends Component{
    

    render(){
      return(
    
            <span className="icon is-large iconPulledLeft">

            <i className="fas fa-3x fa-long-arrow-alt-left" onClick={this.props.resetProps}></i>
         
            </span>
      )
    }
  }

  export default NavBar;
  








//navbar component will be visible after they select off of the '6 panel'