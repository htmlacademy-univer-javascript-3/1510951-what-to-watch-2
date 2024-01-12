import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoute';
import React from 'react';
import { useAppSelector } from '../../hooks/store.ts';
import { AuthorizationStatus } from '../../enums/AuthorizationStatus.ts';
import { getAuthStatus } from '../../store/user-process/user-process.selector.ts';

type PrivateRouteProps = {
  children: React.JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): React.JSX.Element {
  const { children } = props;
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthorizationStatus.Auth;
  return isAuth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
