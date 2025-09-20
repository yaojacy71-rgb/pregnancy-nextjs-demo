import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE || '',
  timeout: 5000,
});

export async function fetchRecords() {
  return api.get('/records');
}

export async function fetchProducts() {
  return api.get('/products');
}

export async function fetchPosts() {
  return api.get('/posts');
}

export default api;
