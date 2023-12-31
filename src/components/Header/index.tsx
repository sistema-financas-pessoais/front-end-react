import { useDispatch } from 'react-redux';
import { changeToggleSidebar } from '../../store/reducers';
import Button from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SettingsMenu from '../SettingsMenu';

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="flex justify-between items-center dark:bg-slate-900 bg-neutral-200 h-14">
      <div>
        <Button
          className="rounded-full dark:hover:bg-slate-800 hover:bg-slate-200"
          onClick={() => dispatch(changeToggleSidebar(true))}
        >
          <MenuOutlinedIcon className="dark:text-white text-black rounded-full dark:hover:bg-slate-800 hover:bg-slate-200" />
        </Button>
      </div>
      <div>
        <SettingsMenu />
      </div>
    </header>
  );
};
