const API_URL = import.meta.env.VITE_API_URL || 'https://your-backend-url.railway.app';

export const apiConfig = {
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}; 