import React from 'react'
import Button from '../button/Button'
import Divider from '../divider/Divider'
type SelectOption = {
    label:string
    value:string
}

type SelectProps = {
    value?: SelectOption
    options: SelectOption[]
    onChange:(value : SelectOption| undefined)=>void
}

const Select = ({value , onChange, options} : SelectProps) => {
  return (
    <div className='wrapper'>
        <span className='value'>{value}</span>
        <Button>&times;</Button>
        <Divider/>
        <div className='caret'></div>
        <ul>
            {options.map(option=>(
                <li>{option}</li>
            ))}
        </ul>
    </div>
  )
}

export default Select