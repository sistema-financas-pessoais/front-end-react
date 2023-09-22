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
  children?: Omit<ListItemProp, 'children'>[];
}

export const principalDataNavigation: ListItemProp[] = [
  {
    link: 'home',
    title: 'Home',
    icon: <InboxIcon />,
    type: TypeDataNavigation.DEFAULT,
  },
  {
    link: 'test-1',
    title: 'Teste 1',
    icon: <MailIcon />,
    type: TypeDataNavigation.DEFAULT,
  },
  {
    link: 'test-1 com children',
    title: 'Teste 1 com children',
    icon: <MailIcon />,
    type: TypeDataNavigation.COLLAPSEBLE,
    children: [
      {
        link: 'home',
        title: 'Home',
        icon: <InboxIcon />,
        type: TypeDataNavigation.DEFAULT,
      },
      {
        link: 'test-1',
        title: 'Teste 1',
        icon: <MailIcon />,
        type: TypeDataNavigation.DEFAULT,
      },
    ],
  },
];
