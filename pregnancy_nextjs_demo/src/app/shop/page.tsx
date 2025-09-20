import React from 'react';
import { getMockProducts } from '../../lib/mock';

export default function ShopPage() {
  const products = getMockProducts();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">商城</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="p-4 bg-white rounded shadow">
            <div className="h-40 bg-gray-100 mb-3 flex items-center justify-center">图片占位</div>
            <h3 className="font-medium">{p.title}</h3>
            <div className="text-sm text-gray-600">{p.category}</div>
            <div className="mt-2 flex items-center justify-between">
              <div className="text-lg font-semibold">¥{p.price}</div>
              <button className="px-3 py-1 bg-green-500 text-white rounded">加入购物车</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
