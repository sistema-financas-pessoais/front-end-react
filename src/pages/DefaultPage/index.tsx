import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

const DefaultPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="dark:bg-slate-950 bg-neutral-100 max-w-[1280px] mx-auto xl:px-0 px-6 pt-2 h-full">
        <Outlet />
      </main>
    </>
  );
};

export default DefaultPage;
