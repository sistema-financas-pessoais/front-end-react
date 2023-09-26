import * as React from 'react';
import { Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import { ListItemProp } from '../../data';
import { ListNavigationItem } from '../ListNavigationItem';
import { AuthWapper } from '../../../AuthWapper';
import { useLoggedUser } from '../../../../store/hooks';

export interface ListCollapsebleItemProps {
  title: string;
  icon: React.ReactNode;
  conditionToShow?: boolean;
  children?: Omit<ListItemProp, 'children'>[];
}

export const ListCollapsebleItem = ({
  icon,
  title,
  children,
  conditionToShow = true,
}: ListCollapsebleItemProps) => {
  const [collapse, setCollapse] = React.useState(false);
  const loggedUser = useLoggedUser();

  return (
    <AuthWapper condition={conditionToShow}>
      <ListItemButton onClick={() => setCollapse(!collapse)}>
        <ListItemIcon className="dark:text-white p-0 m-0 self-center">
          {icon}
        </ListItemIcon>
        <p className="p-0 m-0 text-xs font-semibold self-center">{title}</p>
        {collapse ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={collapse} timeout="auto" unmountOnExit>
        <List>
          {children?.map((dataNavigation) => (
            <ListNavigationItem
              link={dataNavigation.link}
              className="dark:hover:bg-slate-800 hover:bg-slate-200"
              key={dataNavigation.title}
              icon={dataNavigation.icon}
              title={dataNavigation.title}
              onClick={dataNavigation.onClick}
              isChild={true}
              conditionToShow={
                dataNavigation.onlyAdmin ? loggedUser?.isAdmin : true
              }
            />
          ))}
        </List>
      </Collapse>
    </AuthWapper>
  );
};
