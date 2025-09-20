import React from 'react';
import { getMockPosts } from '../../lib/mock';

export default function CommunityPage() {
  const posts = getMockPosts();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">孕妈社区</h2>
      <div className="space-y-4">
        {posts.map(p => (
          <div key={p.id} className="p-4 bg-white rounded shadow">
            <div className="flex justify-between items-center">
              <strong>{p.title}</strong>
              <span className="text-sm text-gray-500">{p.created_at}</span>
            </div>
            <p className="mt-2 text-gray-700">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
