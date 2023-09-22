import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { TypeDataNavigation, principalDataNavigation } from './data';
import { ListNavigationItem } from './components/ListNavigationItem';
import { ListCollapsebleItem } from './components/ListCollapsebleItem';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

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
          className="flex flex-col flex-1 h-full justify-between dark:bg-red-500"
          sx={{ minWidth: 250 }}
          role="presentation"
        >
          <List>
            {principalDataNavigation.map((dataNavigation) => {
              if (dataNavigation.type === TypeDataNavigation.DEFAULT) {
                return (
                  <ListNavigationItem
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
            className="sticky  self-end bottom-0 right-0 pr-3 pb-1"
            onClick={(event) => toggleDrawer(event, false)}
          >
            <WestOutlinedIcon />
          </button>
        </Box>
      </Drawer>
    </>
  );
};
