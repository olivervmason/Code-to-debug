import React, {useContext} from 'react'
import AppContext from './context'

const Button = (props) => {

    const appContext = useContext(AppContext)

    return (
        <div>
         {/* <button style={appContext.currentTheme}>
             {appContext.userEmail}
         </button> */}
         <button style={appContext.currentTheme}>
              Toggle theme
         </button>

        </div>
    )
}

export default Button