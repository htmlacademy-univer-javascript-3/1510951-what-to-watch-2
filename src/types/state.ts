import {store} from '../store';
import {AuthorizationStatus} from '../enums/AuthorizationStatus.ts';
import {CheckUserData, UserData} from './auth.ts';
import {ReviewProps} from './review-types.ts';
import {FilmInfoProps, FilmPromo, FilmProps} from './film-types.ts';
import {ALL_GENRES} from '../consts/genres.ts';

export type UserProcessState = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | CheckUserData | null;
}

export type FilmsProcessState = {
  films: FilmProps[];
  activeGenre: string | typeof ALL_GENRES;
  genreFilms: FilmProps[];
  promoFilm: FilmPromo | null;
  isLoadingList: boolean;
  favoriteFilms: FilmProps[];
}

export type FilmProcessState = {
  currentFilm: FilmInfoProps | null ;
  isLoadingFilm: boolean;
  similarFilms: FilmProps[];
  reviews: ReviewProps[];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
