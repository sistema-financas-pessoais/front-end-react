import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export interface ListNavigationItemProps {
  title: string;
  icon: React.ReactNode;
  isChild?: boolean;
}

export const ListNavigationItem = ({
  icon,
  title,
  isChild = false,
}: ListNavigationItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton sx={isChild ? { pl: 4 } : {}}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
