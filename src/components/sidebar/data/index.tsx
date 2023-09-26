import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export enum TypeDataNavigation {
  DEFAULT = 'default',
  COLLAPSEBLE = 'collapseble',
}

export interface ListItemProp {
  title: string;
  link: string;
  icon: React.ReactNode;
  type: TypeDataNavigation;
  onlyAdmin: boolean;
  onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
  children?: Omit<ListItemProp, 'children'>[];
}

export const principalDataNavigation: ListItemProp[] = [
  {
    link: 'home',
    title: 'Home',
    icon: <InboxIcon />,
    onlyAdmin: false,
    type: TypeDataNavigation.DEFAULT,
  },
  {
    link: 'users',
    title: 'Usuários',
    icon: <MailIcon />,
    onlyAdmin: true,
    type: TypeDataNavigation.COLLAPSEBLE,
    children: [
      {
        link: 'users',
        title: 'Lista de Usuários',
        icon: <InboxIcon />,
        onlyAdmin: true,
        type: TypeDataNavigation.DEFAULT,
      },
      {
        link: 'users/new',
        title: 'Cadsatro de Usuários',
        icon: <MailIcon />,
        onlyAdmin: true,
        type: TypeDataNavigation.DEFAULT,
      },
    ],
  },
];
