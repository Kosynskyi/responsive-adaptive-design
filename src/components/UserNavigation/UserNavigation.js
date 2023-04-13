import {
  NavigationList,
  NavigationItem,
  NavLink,
} from './UserNavigation.styled';

const UserNavigation = () => {
  const dataNav = [
    {
      id: 1,
      name: 'Item-1',
    },
    {
      id: 2,
      name: 'Item-2',
    },
    {
      id: 3,
      name: 'Item-3',
    },
    {
      id: 4,
      name: 'Item-4',
    },
    {
      id: 5,
      name: 'Item-5',
    },
  ];

  return (
    <div>
      <NavigationList>
        {dataNav.map(({ id, name }) => (
          <NavigationItem key={id}>
            <NavLink
              href="www.google.com"
              aria-label={`${name} section`}
              rel="noopener noreferrer"
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
