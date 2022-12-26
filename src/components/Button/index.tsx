import { ButtonContainer } from "./styles";
import { IButton } from "./types";

const Button = ({ label, onClick }: IButton) => {
  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}
    </ButtonContainer>
  );
};

export default Button;
