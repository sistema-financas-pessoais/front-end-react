import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { MenuItemTheme } from './components/MenuItemTheme';
import { MenuItemExit } from './components/MenuItemExit';

export default function SettingsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="rounded-full dark:hover:bg-slate-800 hover:bg-slate-200"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        title="settings menu"
      >
        <SettingsIcon className="dark:text-white text-black rounded-full dark:hover:bg-slate-800 hover:bg-slate-200" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItemTheme />
        <MenuItemExit onClick={handleClose} />
      </Menu>
    </div>
  );
}
