import React from 'react'
import {InputContainer} from './styles'

const index = ({value, onChange}) => {
  return (
    <InputContainer>
        <input value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default index