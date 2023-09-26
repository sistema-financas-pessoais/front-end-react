import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { AuthWapper } from '../../../AuthWapper';

export interface ListNavigationItemProps {
  title: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  isChild?: boolean;
  conditionToShow?: boolean;
  onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
}

export const ListNavigationItem = ({
  icon,
  title,
  link,
  isChild = false,
  className,
  conditionToShow = true,
  onClick,
}: ListNavigationItemProps) => {
  return (
    <AuthWapper condition={conditionToShow}>
      <Link to={link}>
        <ListItem onClick={onClick} disablePadding className={className}>
          <ListItemButton sx={isChild ? { pl: 4 } : {}}>
            <ListItemIcon className="dark:text-white">{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItemButton>
        </ListItem>
      </Link>
    </AuthWapper>
  );
};
