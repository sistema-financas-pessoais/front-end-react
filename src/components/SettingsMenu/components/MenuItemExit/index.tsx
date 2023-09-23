import MenuItem from '@mui/material/MenuItem';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

interface MenuItemExitProps {
  onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
}

export const MenuItemExit = ({ onClick }: MenuItemExitProps) => {
  return (
    <MenuItem onClick={onClick} className="flex gap-2">
      <ExitToAppIcon className=" text-black rounded-full m-0 p-0" />
      Sair
    </MenuItem>
  );
};
