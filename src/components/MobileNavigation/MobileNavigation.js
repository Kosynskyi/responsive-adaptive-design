import Logo from 'components/Logo';
import UserNavigation from 'components/UserNavigation';
import ButtonIcon from 'components/ButtonIcon';
import { IconClose } from './MobileNavigation.styled';

const MobileNavigation = ({ onClick }) => {
  return (
    <div>
      <Logo />
      <UserNavigation />
      <ButtonIcon type="button" onClick={onClick}>
        <IconClose size={44} />
      </ButtonIcon>
    </div>
  );
};

export default MobileNavigation;
