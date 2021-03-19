import React, {useContext} from 'react'
import { HermesContext } from '../context'

export default function RangeInput() {

const {range, minUser, maxUser, handleChange} = useContext(HermesContext)
const [users] = range

const newVal = Number(((users - minUser) * 100) / (maxUser - minUser));

  return (
      <div className="addUserSlider">
            <h2>Add more users</h2>
            <p><b>N9,999</b> per user</p>
            <div className="sliderContainer">
              <div className="bubble" style={{left: `calc( ${newVal}% + (${-3 - newVal * 0.15}px)) `}} >{users}</div>
              <label htmlFor="user">1</label>
              <label style={{float: "right"}} htmlFor="user">&lt;1000</label>
            <input 
            className="slider" 
            type="range" 
            step="20"
            min={minUser} 
            max={maxUser}
            value={users} 
            name="users" 
            id="user"
            onChange={handleChange} />

            </div>
          </div>
  )
}
