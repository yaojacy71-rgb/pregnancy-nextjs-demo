'use client';
import React, {useState} from 'react';
import { getMockProfile } from '../../lib/mock';

export default function ProfilePage() {
  const profile = getMockProfile();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">个人主页</h2>
      <div className="p-4 bg-white rounded shadow mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200"></div>
          <div>
            <div className="font-medium">{profile.nickname}</div>
            <div className="text-sm text-gray-500">预产期：{profile.edd}</div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-medium mb-2">发布闲置物品</h3>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="物品标题" className="w-full mb-2 p-2 border rounded" />
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="物品描述" className="w-full mb-2 p-2 border rounded" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">发布</button>
      </div>
    </div>
  );
}
