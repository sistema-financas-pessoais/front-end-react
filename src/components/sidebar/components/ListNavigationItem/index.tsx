import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
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
          <ListItemButton sx={isChild ? { pl: 3 } : {}}>
            <ListItemIcon className="dark:text-white p-0 m-0">
              {icon}
            </ListItemIcon>
            <p className="p-0 m-0 text-xs font-semibold self-center">{title}</p>
          </ListItemButton>
        </ListItem>
      </Link>
    </AuthWapper>
  );
};
