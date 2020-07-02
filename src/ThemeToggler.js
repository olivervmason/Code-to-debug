import React from 'react'

const ThemeToggler = (props) => {
    return (
        <button onClick={props.onToggle}> Toggle theme </button>
    )
}

export default ThemeToggler