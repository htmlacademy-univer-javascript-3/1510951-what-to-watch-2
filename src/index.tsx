import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

export type IFilmPreview = {
  title: string;
  date: number;
  genre: string;
}
export const dataForPreviewFilm: IFilmPreview = {
  title: 'The Grand Budapest Hotel',
  date: 2014,
  genre: 'Drama'
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
