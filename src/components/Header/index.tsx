import Button from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const Header = () => {
  return (
    <header className="flex justify-between items-center dark:bg-slate-900 bg-neutral-100 h-14">
      <div>
        <Button className="rounded-full dark:hover:bg-slate-800 hover:bg-slate-200">
          <MenuOutlinedIcon className="dark:text-white text-black rounded-full dark:hover:bg-slate-800 hover:bg-slate-200" />
        </Button>
      </div>
      <div></div>
    </header>
  );
};
