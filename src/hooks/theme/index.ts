import { useLocalStorage } from '../storage';

interface useSwitchThemeReturn {
  switchTheme: (newTheme: 'light' | 'dark') => void;
}

export const useSwitchTheme = (): useSwitchThemeReturn => {
  const { get, set } = useLocalStorage();

  return {
    switchTheme: (newTheme: 'light' | 'dark') => {
      const html = document.querySelector('html');
      const currentTheme = get('theme') as 'light' | 'dark';

      if (newTheme === currentTheme) {
        html?.classList.remove('light', 'dark');
        html?.classList.add(currentTheme);

        return;
      }

      set('theme', newTheme);
      html?.classList.remove('light', 'dark');
      html?.classList.add(newTheme);
    },
  };
};

export const useCurrentTheme = (): 'light' | 'dark' => {
  const { get } = useLocalStorage();
  const currentTheme = get('theme') as 'light' | 'dark';
  const html = document.querySelector('html');
  const theme = currentTheme ? currentTheme : 'light';
  html?.classList.remove('light', 'dark');
  html?.classList.add(theme);

  return theme;
};
