import { useLocalStorage } from '../storage';

export type TypeTheme = 'light' | 'dark';
export enum TypeThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}
interface useSwitchThemeReturn {
  switchTheme: (newTheme: TypeTheme) => void;
}

export const useSwitchTheme = (): useSwitchThemeReturn => {
  const { get, set } = useLocalStorage();

  return {
    switchTheme: (newTheme: TypeTheme) => {
      const html = document.querySelector('html');
      const currentTheme = get('theme') as TypeTheme;

      if (newTheme === currentTheme) {
        html?.classList.remove(TypeThemeEnum.LIGHT, TypeThemeEnum.DARK);
        html?.classList.add(currentTheme);

        return;
      }

      set('theme', newTheme);
      html?.classList.remove(TypeThemeEnum.LIGHT, TypeThemeEnum.DARK);
      html?.classList.add(newTheme);
    },
  };
};

export const useCurrentTheme = (): TypeTheme => {
  const { get } = useLocalStorage();
  const currentTheme = get('theme') as TypeTheme;
  const html = document.querySelector('html');
  const theme = currentTheme ? currentTheme : TypeThemeEnum.LIGHT;
  html?.classList.remove(TypeThemeEnum.LIGHT, TypeThemeEnum.DARK);
  html?.classList.add(theme);

  return theme;
};
