import React, {createContext, useState} from 'react'



const HermesContext = createContext()

const HermesContextProvider = ({children}) => {

  const maxUser = 1000
  const minUser = 1
  
  const [basic, setBasic] = useState(true)
  const [premium, setPremium] = useState(false)

  const [users, setUsers] = useState(1)
  const [user, setUser] = useState(0)
  const [total, setTotal] = useState(9999)

  const selectPackage = (packageClass) => {
    if (packageClass.target.id === "basic") {
      if (premium === true) {
        setPremium(false)
        setBasic(true)
      } else {
        setBasic(!basic)
      }
    } else if (packageClass.target.id === "premium") {
      if (basic === true) {
        setBasic(false)
        setPremium(true)
      }else{
      setPremium(!premium)
    } 
  }
}

  const handleChange = (event) => {
    setUsers(event.target.value)
    setTotal(users * 9999)
  }
return (

  <HermesContext.Provider value={{
    maxUser, 
    minUser,
    handleChange,
    selectPackage,
    activeBasic: [basic, setBasic],
    activePremium: [premium, setPremium],
    range: [users, setUsers],
    user: [user, setUser],
    totalPrice: [total, setTotal] 
    }}>
    {children}
  </HermesContext.Provider>
)
}

export {HermesContext, HermesContextProvider}