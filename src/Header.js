import React, {useContext} from 'react';
import AppContext from './context'

const Header = () => {

    const appContext = useContext(AppContext)
    console.log(appContext)
    return (
        <>
            <h1 style={appContext.currentTheme}>Mikes site</h1>
            {appContext.userEmail}
        </>
    )
}

export default Header 