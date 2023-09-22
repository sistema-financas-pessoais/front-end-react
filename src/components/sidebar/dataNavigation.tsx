import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export interface ListItemProp {
  title: string;
  link: string;
  icon: React.ReactNode;
}

export const principalDataNavigation: ListItemProp[] = [
  {
    link: 'home',
    title: 'Home',
    icon: <InboxIcon />,
  },
  {
    link: 'test-1',
    title: 'Teste 1',
    icon: <MailIcon />,
  },
];
