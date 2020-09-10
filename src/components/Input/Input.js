import React from 'react'
import './Input.css'

const Input = (props) => {
    const { size = 'small', ...rest } = props;
    
    return (
        <input className={`input ${size}`} type="text" name="textField" id="textField" {...rest} />
    )
}

export default Input
