import React, {Component} from 'react'
import Banner from './Banner'


class BFeducation extends Component {
    constructor(props) {
        super(props);
    }
render(){
    return(
        <div>
            
        <Banner/>
        <div>
<span className="icon is-large iconPulledLeft">

            <i className="fas fa-3x fa-long-arrow-alt-left" onClick={this.props.toggleLandingPage} ></i>
         
            </span>
          </div>
        </div>
        )
}

}

export default BFeducation;


