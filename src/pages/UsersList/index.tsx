import { TableUsers } from './components/TableUsers';

const UsersList = () => {
  return (
    <div className="mt-1">
      <div className="flex justify-start mb-3">
        <h1 className="dark:text-white text-black font-bold">Users</h1>
      </div>
      <div className="overflow-x-auto">
        <TableUsers />
      </div>
    </div>
  );
};

export default UsersList;
