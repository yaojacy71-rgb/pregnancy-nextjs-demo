import './globals.css';
import React from 'react';
import NavBar from '../components/NavBar';

export const metadata = { title: '孕妈App Demo' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <NavBar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
