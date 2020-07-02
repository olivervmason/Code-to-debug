import React from 'react'

export const themes = {
    light: {
      color: "black",
      background: "white"
    }, 
    dark: {
      color: "white",
      background: "black"
    },
}

const AppContext = React.createContext()

export default AppContext