import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export interface ListNavigationItemProps {
  title: string;
  icon: React.ReactNode;
  isChild?: boolean;
  className: string;
}

export const ListNavigationItem = ({
  icon,
  title,
  isChild = false,
  className,
}: ListNavigationItemProps) => {
  return (
    <ListItem disablePadding className={className}>
      <ListItemButton sx={isChild ? { pl: 4 } : {}}>
        <ListItemIcon className="dark:text-white">{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
