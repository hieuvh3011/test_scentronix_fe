
import React, { ReactNode } from 'react';
import Navbar from '@app/components/NavBar/NavBar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white">
      <header className="w-full p-4 text-white text-center">
        <Navbar />
      </header>
      <main className="flex-1 w-full flex items-center justify-center">
        {children}
      </main>
      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        <p>© 2024 Scentronix Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
