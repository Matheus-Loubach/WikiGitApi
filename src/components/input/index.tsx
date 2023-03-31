import {InputContainer} from './styles'
import {IIpunt} from './type'


const index = ({value, onChange}: IIpunt) => {
  return (
    <InputContainer>
        <input value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default index