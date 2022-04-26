import { Link as RouterLink, matchPath, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home as HomeIcon } from '../../icons/home';
import { ShoppingCart as ShoppingCartIcon } from '../../icons/shopping-cart';
import { User as UserIcon } from '../../icons/user';
import { Cube as CubeIcon } from '../../icons/cube';
import { Logout as LogoutIcon } from '../../icons/logout';

const items = [
  {
    href: '/admin',
    icon: HomeIcon,
    label: 'Home'
  },
  {
    href: '/admin/users',
    icon: UserIcon,
    label: 'Users'
  },
  {
    href: '/admin/products',
    icon: ShoppingCartIcon,
    label: 'Products'
  },
  {
    href: '/admin/orders',
    icon: CubeIcon,
    label: 'Orders'
  },
  {
    href: '/',
    icon: LogoutIcon,
    label: 'Logout'
  },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <Drawer
      open
      sx={{ zIndex: 1000 }}
      variant="permanent"
      PaperProps={{
        sx: {
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100% - 64px)',
          p: 1,
          top: 64,
          width: 73
        }
      }}
    >
      <List sx={{ width: '100%' }}>
        {items.map(({ href, icon: Icon, label }) => {
          const active = matchPath({ path: href, end: true }, location.pathname);

          return (
            <ListItem
              disablePadding
              component={RouterLink}
              key={href}
              to={href}
              sx={{
                flexDirection: 'column',
                color: active ? 'rgb(0, 194, 0)' : 'text.secondary',
                px: 2,
                py: 1.5,
                '&:hover': {
                  color: 'rgb(0, 194, 0)'
                }
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 'auto',
                  color: 'inherit'
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  sx: {
                    pb: 0,
                    pt: 1.25
                  },
                  variant: 'caption'
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
