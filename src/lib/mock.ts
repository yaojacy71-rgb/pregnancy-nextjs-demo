export function getMockRecords() {
  return [
    { id: 'r1', type: '体重', record_date: '2025-06-10', summary: '体重 62.5kg' },
    { id: 'r2', type: '胎动', record_date: '2025-06-09', summary: '今天胎动 10 次' },
    { id: 'r3', type: '产检', record_date: '2025-06-03', summary: 'B超正常，胎心率 150' }
  ];
}

export function getMockProducts() {
  return [
    { id: 'p1', title: '燕窝滋补装（孕期适用）', category: '保健品', price: 399 },
    { id: 'p2', title: '孕妇连衣裙-春夏款', category: '孕妇装', price: 249 },
    { id: 'p3', title: '婴儿连体服（0-6月）', category: '童装', price: 89 }
  ];
}

export function getMockPosts() {
  return [
    { id: 'post1', title: '唐筛什么时候做？', body: '听说第11-14周做唐筛比较准确，大家经验如何？', created_at: '2025-05-12' },
    { id: 'post2', title: '推荐孕期补品', body: '有没有人吃过某品牌燕窝？效果怎样？', created_at: '2025-05-08' }
  ];
}

export function getMockProfile() {
  return { nickname: '小红', edd: '2025-10-08' };
}
