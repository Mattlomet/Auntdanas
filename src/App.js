import React, { Component } from 'react';
import HomePage from './components/HomePage'
import BFeducation from './components/BFeducation'
import Banner from './components/Banner'
import './assets/app.css'
import { pathToFileURL } from 'url';

class App extends Component {
  constructor() {
    super()
    this.state = {
      renderedComponent: 0,
      firstPage: true
    }
  }
  toggleHomePage = () => {
    this.setState({ 
      renderedComponent: <HomePage toggleLandingPage={this.toggleLandingPage}/>,
      firstPage: false
   })
  }
  toggleBFEducation = () => {
    this.setState({
      renderedComponent: <BFeducation toggleLandingPage={this.toggleLandingPage} />,
      firstPage: false
    })
  }
  toggleLandingPage = ()=>{
    this.setState({
      firstPage: true
    })
  }
  render() {
    return (

      (this.state.firstPage)
        ? <div className="mainContainer hero ">
          <div>
            <Banner />

          </div>

          <div class="columns landingPageParent ">
          
          <div className="column">
            <div class=" landingPageBox  ">
              <a className="anchorReset" href="https://www.paperlessibclc.com/store/billing-and-coding" target="_blank">
                <div className="is-size-2 blueText">
                  Crash Course
    </div>
                <p className="purpleText">
                  in billing & reimbursment for IBCLC's
    </p>
              </a>
            </div>
            <div class=" landingPageBox ">
              <div className=" is-size-2 blueText" onClick={this.toggleHomePage}>
                Lactation Billing
    </div>
      
              <p className=" purpleText">

                coding & billing, insurance info, lactation consultant, IBCLC's
            
    </p>
            </div>
            <div class=" landingPageBox ">
              <div className="is-size-2 blueText" onClick={this.toggleBFEducation}>
                BreastFeeding Education
    </div>
              <p className="purpleText">
                pratical tips, items and more

    </p>
            </div>
          </div>
            <div className="column is-one-third landingPageColumn">
              <h1 className="blueText is-size-5">
                If you have signed up or want to sign up with Aetna or any insurance company that wants IBCLCs as in-network providers, this is very important information you need. I am offering a Crash Course In Coding, Documentation and Billing for In-Network IBCLCs. When you sign up to receive direct payments from an insurance company you must comply with current coding, documentation and billing guidelines.
               <p className="purpleText is-size-6">
                  <br />
                  By purchasing the 3rd edition at <a href="https://www.paperlessibclc.com/store/billing-and-coding">www.paperlessibclc.com</a> now you will be able to receive proper reimbursement for the valuable services you perform.
               </p>
              </h1>
              <h2 className="blueText is-size-2">
              <br/>
                GET PAID NOW
                <p className="purpleText is-size-6">
                   "I just want to say how fabulous Donna Sinnott is!!!  I spent hours trying to submit my first claim to Aetna. I was practically in tears trying to figure it out and making numerous phone calls to Aetna which led to nowhere except more frustration. Donna was able to quickly explain a few things I was doing wrong and my claim was accepted in the system.  Then I thought I might do back flips when I received my first check from Aetna which was DOUBLE the amount I was expecting.  I have since received several more checks for the same amount.  We are very lucky to have Donna and her much needed knowledge!"
                </p>
                <p className="is-size-6">
                  -Amy, IBCLC
                </p>
              </h2>
            </div>
            
          </div>
        </div>
        : <div>
          {this.state.renderedComponent}
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
