import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

type IFilm = {
    src: string;
    alt: string;
    filmName: string;
}
const dataForCardFilm: IFilm[] = [
  {
      src: "img/fantastic-beasts-the-crimes-of-grindelwald.jpg",
      alt:"Fantastic Beasts: The Crimes of Grindelwald",
      filmName: "Fantastic Beasts: The Crimes of Grindelwald",
  },
  {
    src: "img/bohemian-rhapsody.jpg",
    alt:"Bohemian Rhapsody",
    filmName: "Bohemian Rhapsody",
  },
  {
    src: "img/macbeth.jpg",
    alt:"Macbeth",
    filmName: "Macbeth",
  },
  {
    src: "img/aviator.jpg",
    alt:"Aviator",
    filmName: "Aviator",
  },
  {
    src: "img/we-need-to-talk-about-kevin.jpg",
    alt:"We need to talk about Kevin",
    filmName: "We need to talk about Kevin",
  },
  {
    src: "img/what-we-do-in-the-shadows.jpg",
    alt:"What We Do in the Shadows",
    filmName: "What We Do in the Shadows",
  },
  {
    src: "img/revenant.jpg",
    alt:"Revenant",
    filmName: "Revenant",
  },
  {
    src: "img/johnny-english.jpg",
    alt:"Johnny English",
    filmName: "Johnny English",
  },
  {
    src: "img/shutter-island.jpg",
    alt:"Shutter Island",
    filmName: "Shutter Island",
  },
  {
    src: "img/pulp-fiction.jpg",
    alt:"Pulp Fiction",
    filmName: "Pulp Fiction",
  },
  {
    src: "img/no-country-for-old-men.jpg",
    alt:"No Country for Old Men",
    filmName: "No Country for Old Men",
  },
  {
    src: "img/snatch.jpg",
    alt:"Snatch",
    filmName: "Snatch",
  },
  {
    src: "img/moonrise-kingdom.jpg",
    alt:"Moonrise Kingdom",
    filmName: "Moonrise Kingdom",
  },
  {
    src: "img/seven-years-in-tibet.jpg",
    alt:"Seven Years in Tibet",
    filmName: "Seven Years in Tibet",
  },
  {
    src: "img/midnight-special.jpg",
    alt:"Midnight Special",
    filmName: "Midnight Special",
  },
  {
    src: "img/war-of-the-worlds.jpg",
    alt: "War of the Worlds",
    filmName: "War of the Worlds",
  },
  {
    src: "img/dardjeeling-limited.jpg",
    alt: "Dardjeeling Limited",
    filmName: "Dardjeeling Limited",
  },
  {
    src: "img/orlando.jpg",
    alt: "Orlando",
    filmName: "Orlando",
  },
  {
    src: "img/mindhunter.jpg",
    alt: "Mindhunter",
    filmName: "Mindhunter",
  },
  {
    src: "img/midnight-special.jpg",
    alt: "Midnight Special 2",
    filmName: "Midnight Special 2",
  },
];



const Main: React.FC = (): JSX.Element => (
    <>
      <section className="film-card">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
        
          <div className="film-card__wrap">
            <div className="film-card__info">
              <div className="film-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>
    
              <div className="film-card__desc">
                <h2 className="film-card__title"></h2>
                <p className="film-card__meta">
                  <span className="film-card__genre"></span>
                  <span className="film-card__year"></span>
                </p>
    
                <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">9</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
          {
            dataForCardFilm.map((filmData) => 
                <article className="small-film-card catalog__films-card" key={filmData.filmName}>
                <div className="small-film-card__image">
                  <img src={filmData.src} alt={filmData.alt} width="280" height="175" />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">{filmData.filmName}</a>
                </h3>
                </article>
            )
          }
         
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
   
      </div>
    </>
)
export default Main;