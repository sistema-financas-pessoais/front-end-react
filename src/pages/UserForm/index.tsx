import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '../../components/Form';
import { useRegisterUser } from '../../hooks/fetchQueries';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

const createUserSchema = z.object({
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
  name: z
    .string()
    .nonempty({
      message: 'O nome é obrigatório',
    })
    .min(2, 'Nome deve conter no mínimo 2 caracteres')
    .max(100, 'Nome deve conter no máximo 100 caracteres'),
});

export type CreateUserData = z.infer<typeof createUserSchema>;

export const UserForm = () => {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  });
  const { handleSubmit, reset } = createUserForm;
  const { isLoading, onRegisterUser } = useRegisterUser({
    onSuccessFn: () => {
      setSnackbarMessage('Usuário criado com sucesso.');
      setOpenSnackbar(true);
      reset();
    },
    onErrorFn: (err) => {
      setSnackbarMessage(
        err?.response?.data['message'] || 'Houve um erro inesperado',
      );
      setOpenSnackbar(true);
    },
  });

  return (
    <>
      <div>
        <h1 className="dark:text-white text-zinc-600 font-bold text-2xl mb-4">
          Cadastro de Usuário
        </h1>
      </div>

      <FormProvider {...createUserForm}>
        <form
          onSubmit={handleSubmit((data) => onRegisterUser(data))}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <Form.Field className="flex flex-col gap-1 w-full lg:w-1/2">
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

            <Form.Field className="flex flex-col gap-1 w-full lg:w-1/2">
              <Form.Label
                htmlFor="name"
                className="text-sm dark:text-white text-zinc-600 flex items-center justify-between font-bold"
              >
                Nome
              </Form.Label>
              <Form.Input
                type="text"
                name="name"
                className="flex-1 rounded border border-slate-700 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <Form.ErrorMessage field="name" />
            </Form.Field>
          </div>

          <div className="flex gap-4 w-full justify-end">
            <button
              type="button"
              disabled={isLoading}
              onClick={() => reset()}
              className="w-20 bg-blue-700 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-blue-600"
            >
              Limpar
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="w-20 bg-emerald-600 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-emerald-500"
            >
              Salvar
            </button>
          </div>
        </form>
      </FormProvider>
      <Snackbar
        className="absolute"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
        key={'top right'}
        autoHideDuration={3000}
      />
    </>
  );
};
