import React, {useContext} from 'react'
import {HermesContext} from '../context'

export default function Packages() {

const {activeBasic, activePremium, selectPackage} = useContext(HermesContext)
const [basic] = activeBasic
const [premium] = activePremium
  return (
    <div className="packageSelect">
            <p>Select your preffered package below</p>
            <div className="packages">

              <div 
              id="premium"
              onClick={selectPackage}
              className={`package premium ${premium ? "active": ""}`}>
              <i className="fas fa-check-circle"></i>
                <div className="price">
                  <h3>Starts From</h3>
                  <p>NGN</p>
                  <h2 className="black">5,999,999.99</h2>
                  <p>per annum</p>
                </div>
                <div className="info">
                  <h2 className="black">Premium</h2>
                  <p><b>100 Users <span className="dot"></span> All Modules</b></p>
                </div>
              </div>

              <div id="basic" 
              className={`package ${basic ? "active": ""}`} 
              onClick={selectPackage}>
                <i className="fas fa-check-circle"></i>
                <div className="packageSummary">
                <h2>Basic</h2>
                <p><b>30 days trial</b> on our premium features and features</p>
                </div>
                <div className="packageDetails">
                  <h4>INCLUDES </h4>
                  <ul className="details">
                    <li>25 users</li>
                    <li>All modules &amp; features</li>
                    <li>Unlimited commitees</li>
                    <li>Unlimited roles creation</li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
  )
}
