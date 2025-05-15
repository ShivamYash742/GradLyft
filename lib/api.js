const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export const fetchApi = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token')
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`)
  }

  return response.json()
}

export const api = {
  get: (endpoint) => fetchApi(endpoint),
  post: (endpoint, data) => 
    fetchApi(endpoint, { method: 'POST', body: JSON.stringify(data) }),
  put: (endpoint, data) => 
    fetchApi(endpoint, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (endpoint) => 
    fetchApi(endpoint, { method: 'DELETE' }),
} 