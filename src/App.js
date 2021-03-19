import React, {useContext, useEffect} from "react";
import "./App.css";

import logo from './assets/logo.png'
import Packages from "./components/Packages";
import RangeInput from "./components/RangeInput";
import SingleModule from './components/SingleModule'
import { HermesContext } from "./context";
import allmodules from './allmodules'

function App() {

  const {totalPrice} = useContext(HermesContext)
  const [total] = totalPrice

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
  }

  const formatted = formatNumber(total)
  
  useEffect(() => {
    document.getElementById("focus").focus()
    alert("Elements are functional")
  }, [])

 
  return (

    // *******************ASIDE****************
    <div className="page">
      <div className="progPage">
        <div className="propcontainer">

          <div className="logo">
            <a href="/">

            <img src={logo} alt=
            "logo"/>
            </a>
          </div>

          <div className="progSteps">
            <ul className="progList">
              <li className="progLink">
                <button 
                id="focus"
                className="progress">Trial &amp; Pricing <i className="fas fa-arrow-right"></i></button></li>
              <li className="progLink"> 
              <button className="progress">Payment Method <i className="fas fa-arrow-right"></i></button> </li>
            </ul>
            <hr/>
            <p>Get started...</p>
          </div>

          <div className="quotes">
            <i className="fas fa-quote-left"></i>
            <em>Success is not final; failure is not fatal: it is the courage to continue that counts. </em><br/>
            -Winston Churchill
          </div>

        </div>
      </div>


      {/* ******************MAIN**************** */}
      <div className="mainPage">
        <div className="maincontainer">
          <p className="greet">hey, terry</p>
          <div className="pageHeader-total">
            <div className="pageHeader">
              <h1 className="black">Start your <span>30 days</span> Trial</h1>
            </div>
            <div className="total">
              <p className="currency">NGN</p>
              <h1 className="totalPrice">{formatted}</h1>
              <h3 className="totalInfo">Total <span>(EXCLUDES VAT)</span></h3>
            </div>
          </div>

          <Packages/>

          <RangeInput />

          <div className="modules">
            <div className="modulesContainer">
            <h3>ALL MODULES</h3>
            {allmodules.map((item, index) => {
              return <SingleModule key={index} name={item.name} icon={item.icon}/>
            })}
            </div>
          </div>

          <div className="nextPrev">
            <button className="prev">Go Back</button>
            <button className="next">Continue</button>
          </div>

        </div>
      </div>
    </div>

  );
}

export default App;

