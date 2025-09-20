import React from 'react';
import { getMockRecords } from '../../lib/mock';

export default function RecordsPage() {
  const records = getMockRecords();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">孕期记录与提醒</h2>
      <div className="grid gap-4">
        {records.map(r => (
          <div key={r.id} className="p-4 bg-white rounded shadow">
            <div className="flex justify-between"><strong>{r.type}</strong><span className="text-sm text-gray-500">{r.record_date}</span></div>
            <div className="mt-2">{r.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
