import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { TypeDataNavigation, principalDataNavigation } from './data';
import { ListNavigationItem } from './components/ListNavigationItem';
import { ListCollapsebleItem } from './components/ListCollapsebleItem';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

export const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (
    event: React.KeyboardEvent | React.MouseEvent | null,
    open: boolean,
  ) => {
    if (event) {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
    }

    setOpen(open);
  };

  return (
    <>
      <Button onClick={(event) => toggleDrawer(event, true)}>Open</Button>
      <Drawer
        anchor={'left'}
        open={open}
        onClose={() => toggleDrawer(null, false)}
      >
        <Box
          className="flex flex-col flex-1 h-full justify-between dark:bg-slate-950 bg-neutral-100 dark:text-white text-black dark:border-slate-100 dark:border-1"
          sx={{ minWidth: 250 }}
          role="presentation"
        >
          <List>
            {principalDataNavigation.map((dataNavigation) => {
              if (dataNavigation.type === TypeDataNavigation.DEFAULT) {
                return (
                  <ListNavigationItem
                    className="dark:hover:bg-slate-800 hover:bg-slate-200"
                    key={dataNavigation.title}
                    icon={dataNavigation.icon}
                    title={dataNavigation.title}
                  />
                );
              } else if (
                dataNavigation.type === TypeDataNavigation.COLLAPSEBLE
              ) {
                return (
                  <ListCollapsebleItem
                    key={dataNavigation.title}
                    icon={dataNavigation.icon}
                    title={dataNavigation.title}
                    children={dataNavigation.children}
                  />
                );
              }
            })}
          </List>
          <button
            className="sticky  self-end bottom-0 right-0 mr-3 mb-1 p-1 dark:hover:bg-slate-800 hover:bg-slate-200 rounded-full"
            onClick={(event) => toggleDrawer(event, false)}
          >
            <MenuOpenOutlinedIcon className="dark:text-white" />
          </button>
        </Box>
      </Drawer>
    </>
  );
};
