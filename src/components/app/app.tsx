import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import Page404 from '../../pages/page-404/page404.tsx';
import AddReview from '../../pages/add-review/add-review';
import SignIn from '../../pages/sign-in/sign-in';
import FilmPage from '../../pages/film-page/film-page.tsx';
import Player from '../../pages/player/player';
import { AppRoute } from '../../enums/AppRoute';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-router/history-router.tsx';
import browserHistory from '../../browser-history.ts';
import ScrollToTop from '../scroll-to-top/scroll-to-top.tsx';

export default function App(): React.JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<SignIn />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyList />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Films}>
            <Route path=":id" element={<FilmPage />} />
            <Route
              path={`:id${AppRoute.Review}`}
              element={
                <PrivateRoute>
                  <AddReview />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path={`${AppRoute.Player}/:id`} element={<Player />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </HistoryRouter>
  );
}
