import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">孕妈App 前端 Demo（可扩展骨架）</h1>
      <p className="mb-4">这是一个 Next.js + TypeScript + Tailwind 的前端骨架，内置页面有：孕期记录、商城、社区、个人主页。</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/records" className="p-4 bg-white rounded shadow">孕期记录与提醒</Link>
        <Link href="/shop" className="p-4 bg-white rounded shadow">商城</Link>
        <Link href="/community" className="p-4 bg-white rounded shadow">孕妈社区</Link>
        <Link href="/profile" className="p-4 bg-white rounded shadow">个人主页</Link>
      </div>
    </div>
  );
}
