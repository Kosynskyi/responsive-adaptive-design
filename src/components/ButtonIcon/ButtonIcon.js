import { StyledButtonIcon } from './ButtonIcon.styled';

const ButtonIcon = ({ onClick, children }) => {
  return <StyledButtonIcon onClick={onClick}>{children}</StyledButtonIcon>;
};

export default ButtonIcon;
