import { useState } from 'react';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { SkeletonUsersList } from '../Skeleton';
import { useDeleteUser, useUsersQuery } from '../../../../hooks/fetchQueries';
import DeleteIcon from '@mui/icons-material/Delete';

export const TableUsers = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { data, isLoading, isSuccess, refetch } = useUsersQuery({
    page: page + 1,
    perPage: rowsPerPage,
    selectFields: 'id,name,email,isAdmin',
  });
  const { isLoading: isDeletingLoading, onDeleteUser } = useDeleteUser({
    onSuccessFn: () => {
      if (!data?.items || data?.items?.length <= 1) {
        setPage((currentPage) => (currentPage === 0 ? 0 : currentPage - 1));

        return;
      }

      refetch();
    },
  });

  if (isLoading) {
    return <SkeletonUsersList />;
  }

  if (!isSuccess) {
    setPage(data?.currentPage || 0);
    setRowsPerPage(data?.perPage || 5);
  }

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(() => newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(() => +event.target.value);
    setPage(() => 0);
  };

  return data?.items && data?.items?.length > 0 ? (
    <Paper
      sx={{ width: '100%', overflow: 'hidden' }}
      className="w-full rounded"
    >
      <div className="w-full overflow-auto max-h-[470px] relative min-w-[1000px] rounded">
        <table className="w-full relative rounded-b">
          <thead className="sticky top-0">
            <tr className="bg-slate-300 dark:bg-slate-800 dark:text-white">
              <th className="w-1/12 py-2 m-auto">Admin</th>
              <th className="w-5/12 py-2">Nome</th>
              <th className="w-4/12 py-2">Email</th>
              <th className="w-2/12 py-2">Ações</th>
            </tr>
          </thead>

          <tbody>
            {data?.items.map((item) => {
              return (
                <tr
                  key={item?.id}
                  className="border-b bg-[#ffffff21] hover:bg-slate-100 dark:bg-slate-600 dark:hover:bg-slate-700 dark:text-white min-w-[1000px]"
                >
                  <td className="w-1/12 text-center py-2 m-auto">
                    <p>{`${item?.isAdmin}`}</p>
                  </td>

                  <td className="w-5/12 text-center py-2">
                    <p>{item?.name}</p>
                  </td>

                  <td className="w-4/12 text-center py-2">
                    <p>{item?.email}</p>
                  </td>

                  <td className="w-2/12 text-center py-2">
                    <div className="w-full flex justify-center">
                      <DeleteIcon
                        className="cursor-pointer dark:text-white dark:hover:text-slate-200 text-slate-600 rounded hover:text-slate-500"
                        onClick={() => onDeleteUser(item?.id || '')}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <TablePagination
          className="rounded-b bottom-0 sticky w-full min-w-[1000px] bg-slate-300 dark:bg-slate-800 dark:text-white"
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={data?.total || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Linhas por página"
        />
      </div>
    </Paper>
  ) : (
    <div className="flex justify-center items-center w-full h-full">
      <h1 className="dark:text-white text-black font-bold text-xl">
        Não há dados
      </h1>
    </div>
  );
};
