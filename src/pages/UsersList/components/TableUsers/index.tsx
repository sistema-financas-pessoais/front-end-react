import * as React from 'react';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
// import { useQuery } from 'react-query';
// import { api } from '../../../../services/api';

const rows = [
  {
    name: 'India',
    code: 'IN',
    population: 1324171354,
    size: 3287263,
    density: 402.81880518838926,
  },
  {
    name: 'China',
    code: 'CN',
    population: 1403500365,
    size: 9596961,
    density: 146.2442501329327,
  },
  {
    name: 'Italy',
    code: 'IT',
    population: 60483973,
    size: 301340,
    density: 200.71670870113493,
  },
  {
    name: 'United States',
    code: 'US',
    population: 327167434,
    size: 9833520,
    density: 33.27063289646027,
  },
  {
    name: 'Canada',
    code: 'CA',
    population: 37602103,
    size: 9984670,
    density: 3.7659835527864214,
  },
  {
    name: 'Australia',
    code: 'AU',
    population: 25475400,
    size: 7692024,
    density: 3.311924143762422,
  },
  {
    name: 'Germany',
    code: 'DE',
    population: 83019200,
    size: 357578,
    density: 232.17088299615747,
  },
  {
    name: 'Ireland',
    code: 'IE',
    population: 4857000,
    size: 70273,
    density: 69.11616125681272,
  },
  {
    name: 'Mexico',
    code: 'MX',
    population: 126577691,
    size: 1972550,
    density: 64.16957288788623,
  },
  {
    name: 'Japan',
    code: 'JP',
    population: 126317000,
    size: 377973,
    density: 334.19582880258645,
  },
  {
    name: 'France',
    code: 'FR',
    population: 67022000,
    size: 640679,
    density: 104.61088938454358,
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    population: 67545757,
    size: 242495,
    density: 278.5449473185014,
  },
  {
    name: 'Russia',
    code: 'RU',
    population: 146793744,
    size: 17098246,
    density: 8.585310095550152,
  },
  {
    name: 'Nigeria',
    code: 'NG',
    population: 200962417,
    size: 923768,
    density: 217.54641533372015,
  },
  {
    name: 'Brazil',
    code: 'BR',
    population: 210147125,
    size: 8515767,
    density: 24.677416021363666,
  },
  {
    name: 'India',
    code: 'IN',
    population: 1324171354,
    size: 3287263,
    density: 402.81880518838926,
  },
  {
    name: 'China',
    code: 'CN',
    population: 1403500365,
    size: 9596961,
    density: 146.2442501329327,
  },
  {
    name: 'Italy',
    code: 'IT',
    population: 60483973,
    size: 301340,
    density: 200.71670870113493,
  },
  {
    name: 'United States',
    code: 'US',
    population: 327167434,
    size: 9833520,
    density: 33.27063289646027,
  },
  {
    name: 'Canada',
    code: 'CA',
    population: 37602103,
    size: 9984670,
    density: 3.7659835527864214,
  },
  {
    name: 'Australia',
    code: 'AU',
    population: 25475400,
    size: 7692024,
    density: 3.311924143762422,
  },
  {
    name: 'Germany',
    code: 'DE',
    population: 83019200,
    size: 357578,
    density: 232.17088299615747,
  },
  {
    name: 'Ireland',
    code: 'IE',
    population: 4857000,
    size: 70273,
    density: 69.11616125681272,
  },
  {
    name: 'Mexico',
    code: 'MX',
    population: 126577691,
    size: 1972550,
    density: 64.16957288788623,
  },
  {
    name: 'Japan',
    code: 'JP',
    population: 126317000,
    size: 377973,
    density: 334.19582880258645,
  },
  {
    name: 'France',
    code: 'FR',
    population: 67022000,
    size: 640679,
    density: 104.61088938454358,
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    population: 67545757,
    size: 242495,
    density: 278.5449473185014,
  },
  {
    name: 'Russia',
    code: 'RU',
    population: 146793744,
    size: 17098246,
    density: 8.585310095550152,
  },
  {
    name: 'Nigeria',
    code: 'NG',
    population: 200962417,
    size: 923768,
    density: 217.54641533372015,
  },
  {
    name: 'Brazil',
    code: 'BR',
    population: 210147125,
    size: 8515767,
    density: 24.677416021363666,
  },
  {
    name: 'India',
    code: 'IN',
    population: 1324171354,
    size: 3287263,
    density: 402.81880518838926,
  },
  {
    name: 'China',
    code: 'CN',
    population: 1403500365,
    size: 9596961,
    density: 146.2442501329327,
  },
  {
    name: 'Italy',
    code: 'IT',
    population: 60483973,
    size: 301340,
    density: 200.71670870113493,
  },
  {
    name: 'United States',
    code: 'US',
    population: 327167434,
    size: 9833520,
    density: 33.27063289646027,
  },
  {
    name: 'Canada',
    code: 'CA',
    population: 37602103,
    size: 9984670,
    density: 3.7659835527864214,
  },
  {
    name: 'Australia',
    code: 'AU',
    population: 25475400,
    size: 7692024,
    density: 3.311924143762422,
  },
  {
    name: 'Germany',
    code: 'DE',
    population: 83019200,
    size: 357578,
    density: 232.17088299615747,
  },
  {
    name: 'Ireland',
    code: 'IE',
    population: 4857000,
    size: 70273,
    density: 69.11616125681272,
  },
  {
    name: 'Mexico',
    code: 'MX',
    population: 126577691,
    size: 1972550,
    density: 64.16957288788623,
  },
  {
    name: 'Japan',
    code: 'JP',
    population: 126317000,
    size: 377973,
    density: 334.19582880258645,
  },
  {
    name: 'France',
    code: 'FR',
    population: 67022000,
    size: 640679,
    density: 104.61088938454358,
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    population: 67545757,
    size: 242495,
    density: 278.5449473185014,
  },
  {
    name: 'Russia',
    code: 'RU',
    population: 146793744,
    size: 17098246,
    density: 8.585310095550152,
  },
  {
    name: 'Nigeria',
    code: 'NG',
    population: 200962417,
    size: 923768,
    density: 217.54641533372015,
  },
  {
    name: 'Brazil',
    code: 'BR',
    population: 210147125,
    size: 8515767,
    density: 24.677416021363666,
  },
  {
    name: 'India',
    code: 'IN',
    population: 1324171354,
    size: 3287263,
    density: 402.81880518838926,
  },
  {
    name: 'China',
    code: 'CN',
    population: 1403500365,
    size: 9596961,
    density: 146.2442501329327,
  },
  {
    name: 'Italy',
    code: 'IT',
    population: 60483973,
    size: 301340,
    density: 200.71670870113493,
  },
  {
    name: 'United States',
    code: 'US',
    population: 327167434,
    size: 9833520,
    density: 33.27063289646027,
  },
  {
    name: 'Canada',
    code: 'CA',
    population: 37602103,
    size: 9984670,
    density: 3.7659835527864214,
  },
  {
    name: 'Australia',
    code: 'AU',
    population: 25475400,
    size: 7692024,
    density: 3.311924143762422,
  },
  {
    name: 'Germany',
    code: 'DE',
    population: 83019200,
    size: 357578,
    density: 232.17088299615747,
  },
  {
    name: 'Ireland',
    code: 'IE',
    population: 4857000,
    size: 70273,
    density: 69.11616125681272,
  },
  {
    name: 'Mexico',
    code: 'MX',
    population: 126577691,
    size: 1972550,
    density: 64.16957288788623,
  },
  {
    name: 'Japan',
    code: 'JP',
    population: 126317000,
    size: 377973,
    density: 334.19582880258645,
  },
  {
    name: 'France',
    code: 'FR',
    population: 67022000,
    size: 640679,
    density: 104.61088938454358,
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    population: 67545757,
    size: 242495,
    density: 278.5449473185014,
  },
  {
    name: 'Russia',
    code: 'RU',
    population: 146793744,
    size: 17098246,
    density: 8.585310095550152,
  },
  {
    name: 'Nigeria',
    code: 'NG',
    population: 200962417,
    size: 923768,
    density: 217.54641533372015,
  },
  {
    name: 'Brazil',
    code: 'BR',
    population: 210147125,
    size: 8515767,
    density: 24.677416021363666,
  },
];

export const TableUsers = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const { data, isLoading, refetch } = useQuery('listUsers', () => {
  //   return api.get<any>().then((response) => response.data);
  // });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hiden' }} className="w-full rounded">
      <div className="w-full overflow-auto max-h-[470px] relative min-w-[1000px] rounded">
        <table className="w-full relative rounded-b">
          <tr className="bg-slate-300 dark:bg-slate-800 dark:text-white sticky top-0">
            <th className="w-1/12 py-2 m-auto">Admin</th>
            <th className="w-5/12 py-2">Nome</th>
            <th className="w-4/12 py-2">Email</th>
            <th className="w-2/12 py-2">Ações</th>
          </tr>

          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <tr className="border-b dark:bg-slate-600 dark:text-white">
                  <td className="w-1/12 text-center py-2 m-auto">
                    <p>{row?.name}</p>
                  </td>

                  <td className="w-5/12 text-center py-2">
                    <p>{row?.code}</p>
                  </td>

                  <td className="w-4/12 text-center py-2">
                    <p>{row?.population}</p>
                  </td>

                  <td className="w-2/12 text-center py-2">
                    <div className="w-full flex gap-2 justify-center"></div>
                  </td>
                </tr>
              );
            })}
        </table>

        <TablePagination
          className="rounded-b bottom-0 sticky w-full min-w-[1000px] bg-slate-300 dark:bg-slate-800 dark:text-white"
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </Paper>
  );
};
