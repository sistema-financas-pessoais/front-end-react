import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { principalDataNavigation } from './dataNavigation';

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
    <div>
      <>
        <Button onClick={(event) => toggleDrawer(event, true)}>left</Button>
        <Drawer
          anchor={'left'}
          open={open}
          onClose={() => toggleDrawer(null, false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={(event) => toggleDrawer(event, false)}
            onKeyDown={(event) => toggleDrawer(event, false)}
          >
            <List>
              {principalDataNavigation.map((dataNavigation) => (
                <ListItem key={dataNavigation.title} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{dataNavigation.icon}</ListItemIcon>
                    <ListItemText primary={dataNavigation.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </>
    </div>
  );
};
