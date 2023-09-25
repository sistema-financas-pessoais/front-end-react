/* eslint-disable react-hooks/rules-of-hooks */
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '../../components/Form';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { api } from '../../services/api';
import { useSetTokenOnLocalStorage } from '../../hooks/token';
import { useNavigate } from 'react-router-dom';
import { useJwtDecode } from '../../hooks/auth/useJwtDecode';
import { LoggedUser } from '../../@types/LoggedUser';
import { changeLoggedUser } from '../../store/reducers';
import { useAppDispatch } from '../../store/hooks';

const createLoginSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: 'O e-mail é obrigatório',
    })
    .email({
      message: 'Formato de e-mail inválido',
    })
    .min(6, 'Email deve conter no mínimo 6 caracteres')
    .max(50, 'Email deve conter no máximo 50 caracteres')
    .toLowerCase(),
  password: z
    .string()
    .nonempty({
      message: 'A senha é obrigatória',
    })
    .min(6, {
      message: 'A senha precisa ter no mínimo 6 caracteres',
    }),
});

type CreateLoginData = z.infer<typeof createLoginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const createUserForm = useForm<CreateLoginData>({
    resolver: zodResolver(createLoginSchema),
  });
  const { setTokenOnLocalStorage } = useSetTokenOnLocalStorage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data: CreateLoginData) => {
      return api.post('sign-in', data).then((response) => response.data);
    },
    onSuccess: (res: { access_token: string }) => {
      setTokenOnLocalStorage(res.access_token);
      const loggedUser = useJwtDecode<LoggedUser | null>(res.access_token);
      dispatch(changeLoggedUser(loggedUser));
      navigate('/');
    },
  });

  const chengeShowPassword = () => {
    if (showPassword) {
      document.querySelector('#password')?.setAttribute('type', 'password');
    } else {
      document.querySelector('#password')?.setAttribute('type', 'text');
    }

    setShowPassword((state) => !state);
  };

  const {
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = createUserForm;

  const userPassword = watch('password');
  const isPasswordStrong = new RegExp(
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})',
  ).test(userPassword);
  return (
    <main className="dark:bg-slate-950 bg-neutral-100 max-w-[1280px] mx-auto p-8 h-screen flex flex-col gap-6 items-center justify-center">
      <div>
        <h1 className="dark:text-white text-zinc-600 font-bold text-3xl">
          Login
        </h1>
      </div>
      <FormProvider {...createUserForm}>
        <form
          onSubmit={handleSubmit((data) => mutation.mutate(data))}
          className="flex flex-col gap-4 w-full max-w-xs"
        >
          <Form.Field className="flex flex-col gap-1">
            <Form.Label
              htmlFor="email"
              className="text-sm dark:text-white text-zinc-600 flex items-center justify-between font-bold"
            >
              E-mail
            </Form.Label>
            <Form.Input
              type="email"
              name="email"
              className="flex-1 rounded border border-slate-700 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <Form.ErrorMessage field="email" />
          </Form.Field>

          <Form.Field className="flex flex-col gap-1">
            <Form.Label
              htmlFor="password"
              className="text-sm dark:text-white text-zinc-600 flex items-center justify-between font-bold"
            >
              Senha
              {isPasswordStrong ? (
                <span className="text-xs text-emerald-600">Senha forte</span>
              ) : (
                <span className="text-xs text-red-500">Senha fraca</span>
              )}
            </Form.Label>
            <div className="relative flex items-center">
              <Form.Input
                id="password"
                type="password"
                name="password"
                className="flex-1 rounded border border-slate-700 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {showPassword ? (
                <RemoveRedEyeIcon
                  onClick={chengeShowPassword}
                  className="dark:text-black text-zinc-600 right-0 my-auto absolute mr-2"
                  fontSize="small"
                />
              ) : (
                <VisibilityOffIcon
                  onClick={chengeShowPassword}
                  className="dark:text-black text-zinc-600 right-0 my-auto absolute mr-2"
                  fontSize="small"
                />
              )}
            </div>
            <Form.ErrorMessage field="password" />
          </Form.Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-violet-500 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-violet-600"
          >
            Salvar
          </button>
        </form>
      </FormProvider>
    </main>
  );
};

export default Login;
