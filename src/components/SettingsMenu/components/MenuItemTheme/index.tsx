import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {
  TypeTheme,
  TypeThemeEnum,
  useCurrentTheme,
  useSwitchTheme,
} from '../../../../hooks/theme';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export const MenuItemTheme = () => {
  const { switchTheme } = useSwitchTheme();
  const [currentTheme, setCurrentTheme] = useState<TypeTheme>(
    useCurrentTheme(),
  );
  const handleTheme = () => {
    const newTheme =
      currentTheme === TypeThemeEnum.LIGHT
        ? TypeThemeEnum.DARK
        : TypeThemeEnum.LIGHT;

    switchTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <MenuItem
      title={
        currentTheme === TypeThemeEnum.LIGHT
          ? 'Mudar para tema Dark'
          : 'Mudar para tema Light'
      }
      onClick={handleTheme}
      className="flex gap-2"
    >
      {currentTheme === TypeThemeEnum.LIGHT ? (
        <DarkModeOutlinedIcon className=" text-black rounded-full m-0 p-0" />
      ) : (
        <LightModeOutlinedIcon className=" text-black rounded-full m-0 p-0" />
      )}
      {currentTheme === TypeThemeEnum.LIGHT ? 'Dark' : 'Light'}
    </MenuItem>
  );
};
