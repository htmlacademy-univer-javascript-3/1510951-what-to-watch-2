type ICard = {
  src: string;
  alt: string;
  filmName: string;
}
// ICard: {src: string, alt:string, filmName:string}
const Card: React.FC<ICard> = ({src, alt, filmName}: ICard): JSX.Element => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={src} alt={alt} width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href="film-page.html">{filmName}</a>
    </h3>
  </article>
);
export default Card;
