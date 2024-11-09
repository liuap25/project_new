import React, { useState } from 'react';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';

function App() {
  // Simple auth state management (in a real app, use a proper auth system)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<'login' | 'register' | 'dashboard'>('login');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  const navigateToRegister = () => setCurrentPage('register');
  const navigateToLogin = () => setCurrentPage('login');

  if (isAuthenticated) {
    return <Dashboard onLogout={handleLogout} />;
  }

  if (currentPage === 'register') {
    return (
      <Register
        onRegister={handleRegister}
        onNavigateToLogin={navigateToLogin}
      />
    );
  }

  return (
    <Login
      onLogin={handleLogin}
      onNavigateToRegister={navigateToRegister}
    />
  );
}

export default App;