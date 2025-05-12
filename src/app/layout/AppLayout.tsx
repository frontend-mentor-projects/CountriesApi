import { Outlet } from 'react-router-dom';

import Header from './Header';

export default function AppLayout() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-10"></footer>
    </>
  );
}
