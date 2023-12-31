import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PeopleIcon from '@mui/icons-material/People';
import AddCardIcon from '@mui/icons-material/AddCard';
import HistoryIcon from '@mui/icons-material/History';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

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
    icon: <HomeIcon  />,
    onlyAdmin: false,
    type: TypeDataNavigation.DEFAULT,
  },
  {
    link: 'users',
    title: 'Usuários',
    icon: <PeopleIcon />,
    onlyAdmin: true,
    type: TypeDataNavigation.COLLAPSEBLE,
    children: [
      {
        link: 'users',
        title: 'Lista de Usuários',
        icon: <ListIcon />,
        onlyAdmin: true,
        type: TypeDataNavigation.DEFAULT,
      },
      {
        link: 'users/new',
        title: 'Cadastro de Usuários',
        icon: <PersonAddIcon />,
        onlyAdmin: true,
        type: TypeDataNavigation.DEFAULT,
      },
    ],
  },
  {
    link: 'accounts',
    title: 'Contas',
    icon: <AccountBalanceWalletIcon />,
    onlyAdmin: true,
    type: TypeDataNavigation.COLLAPSEBLE,
    children: [
      {
        link: 'accounts',
        title: 'Lista de Contas',
        icon: <AddCardIcon />,
        onlyAdmin: true,
        type: TypeDataNavigation.DEFAULT,
      },
      {
        link: 'accounts/entries',
        title: 'Movimentações/Lançamentos',
        icon: <AttachMoneyIcon />,
        onlyAdmin: true,
        type: TypeDataNavigation.DEFAULT,
      },
      {
        link: 'accounts/history',
        title: 'Histórico',
        icon: <HistoryIcon />,
        onlyAdmin: true,
        type: TypeDataNavigation.DEFAULT,
      },
    ],
  },
];
