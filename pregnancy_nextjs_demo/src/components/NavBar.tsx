'use client';
import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-white shadow">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-semibold">孕妈App</Link>
          <Link href="/records" className="text-sm text-gray-600">记录</Link>
          <Link href="/shop" className="text-sm text-gray-600">商城</Link>
          <Link href="/community" className="text-sm text-gray-600">社区</Link>
          <Link href="/profile" className="text-sm text-gray-600">我的</Link>
        </div>
        <div>
          <a className="px-3 py-1 bg-blue-600 text-white rounded" href="#">登录</a>
        </div>
      </div>
    </nav>
  );
}
