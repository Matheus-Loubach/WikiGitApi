import { ButtonContainer } from './styles';
import {IButton} from './types'

const Button = ({ onClick }: IButton) => {
  return (
    <ButtonContainer onClick={onClick}>
      Buscar
    </ButtonContainer>
  );
};

export default Button;