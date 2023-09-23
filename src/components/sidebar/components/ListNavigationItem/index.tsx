import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export interface ListNavigationItemProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
  isChild?: boolean;
  onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
}

export const ListNavigationItem = ({
  icon,
  title,
  isChild = false,
  className,
  onClick,
}: ListNavigationItemProps) => {
  return (
    <ListItem onClick={onClick} disablePadding className={className}>
      <ListItemButton sx={isChild ? { pl: 4 } : {}}>
        <ListItemIcon className="dark:text-white">{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
