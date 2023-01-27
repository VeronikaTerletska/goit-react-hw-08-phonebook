import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Layout } from './Layout/Layout';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { RestrictedRouts } from './RestrictedRoute';
import { PrivateRouts } from './PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <RestrictedRouts component={Register} redirectTo="/contacts" />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRouts component={Login} redirectTo="/contacts" />
            }
          />

          <Route
            path="/contacts"
            element={<PrivateRouts component={Contacts} redirectTo="/login" />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    )
  );
};
