import React, {Component} from 'react'
import Banner from './Banner'
import Billing from './Content/Billing'
import FirstSteps from './Content/FirstSteps'

import NavBar from './NavBar.js'
class HomePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadedContent: true,
      renderedComponent: 0,
    }
  }
  contentRender = (event)=>{
    

    if(event.target.id === "steps"){
      this.setState({
        renderedComponent: <FirstSteps/>,
        loadedContent: false
      })
    }if( event.target.id === "where"){
      this.setState({
        renderedComponent: "hello",
        loadedContent: false

      })
    } if( event.target.id === "medicaid"){
      this.setState({
        renderedComponent: "hello",
        loadedContent: false

      })
    } if(event.target.id=== "billing"){
      this.setState({
        renderedComponent: <Billing/>,
        loadedContent: false

      })
    } if( event.target.id === "docs"){
      this.setState({
        renderedComponent: "hello",
        loadedContent: false

      })
    }else if( event.target.id === "faqs"){
      this.setState({
        renderedComponent: "hello",
        loadedContent: false

      })
    }

  }
  navReset = ()=>{
    this.setState({
      loadedContent: true
    })
  }
  render(){
    return(
      <div>
      <Banner/>
      {
        (this.state.loadedContent)
        ?<div>
          <div>
<span className="icon is-large iconPulledLeft">

            <i className="fas fa-3x fa-long-arrow-alt-left" onClick={this.props.toggleLandingPage} ></i>
         
            </span>
          </div>
          
<div class="columns outerMargin">
        <div class="column homePageBox  blueText" id="steps" onClick={this.contentRender}>
        First Steps
        </div>
        <div class="column homePageBox  blueText" id="where" onClick={this.contentRender}>
        Where Are You Now?
        </div>
        <div class="column homePageBox  blueText" id="medicaid" onClick={this.contentRender}>
        Medicaid & RN IBCLC
        </div>
        
        </div>
        <div class="columns outerMargin bottomMargin">
        <div class="column homePageBox  blueText" id="billing" onClick={this.contentRender}>
        Billing for Mom & Baby
        </div>
        <div class="column homePageBox  blueText" id="docs"onClick={this.contentRender}>
        Integration with Docs
        </div>
        <div class="column homePageBox  blueText" id="faqs" onClick={this.contentRender}>
        FAQs
        </div>
        </div>
        <div class="columns outerMargin bottomMargin lastbox">
        
        <div className="column"></div>
        <a className="anchorReset" href="https://www.paperlessibclc.com/store/billing-and-coding">
        <div class="column homePageBox lastBox blueText" >
        Crash Course
        <p className="purpleText">
        <br/>
          in billing & reimbursement for IBCLC's
        </p>
        </div>
        </a>
        <div className="column"></div>
        </div>
        </div>
        
        
        :<div>
          <NavBar resetProps={this.navReset}/>
        {this.state.renderedComponent}
        </div>
      }
        
    </div>
    )
  }
}

export default HomePage;








//Banner will always be visible
//ContentPanel will toggle which 'content' will show
//navbar will un-hide when content loads
