import { useState } from 'react';

export const useChangeShowPassword = (inputId: string) => {
  const [showPassword, setShowPassword] = useState(false);

  return {
    changeShowPassword: () => {
      if (showPassword) {
        document.querySelector(`#${inputId}`)?.setAttribute('type', 'password');
      } else {
        document.querySelector(`#${inputId}`)?.setAttribute('type', 'text');
      }

      setShowPassword((state) => !state);
    },
    showPassword,
  };
};
