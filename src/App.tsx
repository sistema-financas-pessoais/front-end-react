import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="dark:bg-slate-950 bg-neutral-100"></main>
    </>
  );
}

export default App;
