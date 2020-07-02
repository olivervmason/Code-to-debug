import React from 'react'
import Button from './Button'

const Card = (props) => {
    return (
        <div className="card">
            <img src="https://picsum.photos/200" />
            <h2>The card</h2>
            <p>Paragraph text</p>
            <Button />
        </div>
    )
}

export default Card