import { TableUsers } from './components/TableUsers';

const UsersList = () => {
  return (
    <>
      <div className="flex justify-start mb-3">
        <h1 className="dark:text-white text-black font-bold text-2xl">Users</h1>
      </div>

      <div className="overflow-x-auto">
        <TableUsers />
      </div>
    </>
  );
};

export default UsersList;
