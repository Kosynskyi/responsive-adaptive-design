import { dataNav } from 'data/dataNav';
import {
  NavigationList,
  NavigationItem,
  NavLink,
} from './UserNavigation.styled';

const UserNavigation = ({ onCloseMenu }) => {
  return (
    <div>
      <NavigationList>
        {dataNav.map(({ id, name }) => (
          <NavigationItem key={id}>
            <NavLink
              href="#"
              aria-label={`${name} section`}
              rel="noopener noreferrer"
              onClick={onCloseMenu}
            >
              {name}
            </NavLink>
          </NavigationItem>
        ))}
      </NavigationList>
    </div>
  );
};

export default UserNavigation;
