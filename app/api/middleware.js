import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function getToken() {
  const cookieStore = cookies();
  const token = cookieStore.get('gradlyft_token')?.value;
  return token;
}

export async function authenticate() {
  try {
    const token = await getToken();
    
    if (!token) {
      return { authenticated: false, error: 'Authentication required' };
    }
    
    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);
    
    return { 
      authenticated: true, 
      user: {
        id: decoded.userId,
        email: decoded.email,
        role: decoded.role
      } 
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return { authenticated: false, error: 'Invalid token' };
  }
}

export async function authorizeRole(allowedRoles) {
  const authResult = await authenticate();
  
  if (!authResult.authenticated) {
    return authResult;
  }
  
  if (!allowedRoles.includes(authResult.user.role)) {
    return { 
      authenticated: true, 
      authorized: false, 
      error: 'Access denied',
      user: authResult.user
    };
  }
  
  return { 
    authenticated: true, 
    authorized: true,
    user: authResult.user
  };
} 