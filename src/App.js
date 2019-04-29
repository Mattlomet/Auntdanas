import React, {Component} from 'react';
import HomePage from './components/HomePage'
import Banner from './components/Banner'
import './assets/app.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      firstPage : true
    }
  }
  toggleHomePage = ()=>{
    this.setState({firstPage:false})
  }
  render(){
    return(
      
      (this.state.firstPage)
      ?<div>
        <Banner/>
        <div class="columns">
  <div class="column landingPageBox has-background-grey-lighter has-text-info">
      <a href="https://www.paperlessibclc.com/store/billing-and-coding" target="_blank">
    <div className="is-size-2">
      Crash Course
    </div>
    in billing & reimbursment for IBCLC's
      </a>
  </div>
  <div class="column landingPageBox has-background-grey-lighter has-text-info">
  <div className="is-size-2" onClick={this.toggleHomePage}>
      Lactation Billing
    </div>
    coding & billing, insurance info, lactation consultant, IBCLC's
  </div>
</div>
        </div>
      :<div> 
        <HomePage/>
        </div>
    )
  }
}
export default App;



//using app.js as the "landing page"
//users will either go to website selling content or 
//get pushed into the homepage component which will be a heavily styled navbar


//use ternary operator based on state to either show this page or homepage
// (state){
// : this page
// ? homePage
