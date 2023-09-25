import MenuItem, { MenuItemTypeMap } from '@mui/material/MenuItem';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useLogout } from '../../../../hooks/auth';
import { HTMLAttributes } from 'react';

interface MenuItemExitProps
  extends HTMLAttributes<HTMLLIElement & MenuItemTypeMap> {}

export const MenuItemExit = (props: MenuItemExitProps) => {
  const { logoutFn } = useLogout();

  const logout = () => {
    logoutFn();
  };

  return (
    <MenuItem {...props} onClick={logout} className="flex gap-2">
      <ExitToAppIcon className=" text-black rounded-full m-0 p-0" />
      Sair
    </MenuItem>
  );
};
