import { React, useState, useMemo } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useAuth from '../hooks/AuthHook';
import AuthContext from '../contexts/AuthContext';
import routes from '../routes/routes';

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  };
  const getUserName = () => JSON.parse(localStorage.getItem('userId')).username;
  const checkToken = () => {
    const token = JSON.parse(localStorage.getItem('userId')) ?? null;
    if (token) {
      return true;
    }
    return false;
  };
  const setToken = (token) => localStorage.setItem('userId', JSON.stringify(token));
  const memo = useMemo(() => ({
    loggedIn, logIn, logOut, getUserName, setToken, checkToken,
  }));
  return (
    <AuthContext.Provider value={memo}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthButton = () => {
  const { t } = useTranslation();
  const auth = useAuth();
  return (
    auth.loggedIn
      ? <Button onClick={auth.logOut}>{t('logOutBtn')}</Button>
      : null
  );
};

export const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn ? children : <Navigate to={routes.loginPage()} state={{ from: location }} />
  );
};

export const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));

  if (userId && userId.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }
  return {};
};
