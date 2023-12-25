import {combineReducers} from '@reduxjs/toolkit';
import {userReducer} from './user-process/user-process.slice.ts';
import {NameSpace} from '../consts/name-space.ts';
import {filmsReducer} from './film-process/film-process.slice.ts';


export const rootReducer = combineReducers({
  [NameSpace.Film]: filmsReducer.reducer,
  [NameSpace.Films]: filmsReducer.reducer,
  [NameSpace.User]: userReducer.reducer,
});
