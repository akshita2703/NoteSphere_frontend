import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = true; // Check if the user is authenticated

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/Auth" replace />
  );
};

export default ProtectedRoute;
