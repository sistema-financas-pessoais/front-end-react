import MenuItem, { MenuItemTypeMap } from '@mui/material/MenuItem';
import { HTMLAttributes } from 'react';
import { useLoggedUser } from '../../../../store/hooks';

interface MenuItemInfoProps
  extends HTMLAttributes<HTMLLIElement & MenuItemTypeMap> {}

export const MenuItemInfo = (props: MenuItemInfoProps) => {
  const loggedUser = useLoggedUser();

  return (
    <MenuItem
      {...props}
      className="flex flex-col gap-1 justify-center items-start"
    >
      <p className="p-0 m-0 self-start text-xs">Logado como:</p>
      <p className="p-0 m-0 self-start text-xs">{loggedUser?.email}</p>
    </MenuItem>
  );
};
