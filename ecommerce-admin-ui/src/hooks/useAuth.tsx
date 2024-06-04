import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const useAuth = (): AuthState & { updateAuthState: (token: string | null) => void } => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    token: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("token from useAuth", token);
    setAuthState({
      isAuthenticated: !!token,
      token: token || null,
    });
  }, []);

  const updateAuthState = (token: string | null) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    setAuthState({
      isAuthenticated: !!token,
      token: token || null,
    });
  };

  return { ...authState, updateAuthState };
};

export default useAuth;