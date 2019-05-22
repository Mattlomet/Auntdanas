import React, { Component } from 'react';
import HomePage from './components/HomePage'
import Banner from './components/Banner'
import './assets/app.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstPage: true
    }
  }
  toggleHomePage = () => {
    this.setState({ firstPage: false })
  }
  render() {
    return (

      (this.state.firstPage)
        ? <div className="mainContainer hero ">
          <div>
            <Banner />

          </div>
          <div class="columns landingPageParent ">
            <div class="column landingPageBox  ">
              <a className="anchorReset" href="https://www.paperlessibclc.com/store/billing-and-coding" target="_blank">
                <div className="is-size-2 blueText">
                  Crash Course
    </div>
                <p className="purpleText">
                  in billing & reimbursment for IBCLC's
    </p>
              </a>
            </div>
            <div class="column landingPageBox ">
              <div className="is-size-2 blueText" onClick={this.toggleHomePage}>
                Lactation Billing
    </div>
              <p className="purpleText">
                coding & billing, insurance info, lactation consultant, IBCLC's
            
    </p>
            </div>
          </div>
        </div>
        : <div>
          <HomePage />
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
