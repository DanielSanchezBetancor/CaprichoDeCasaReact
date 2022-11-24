import CarouselOne from "../../assets/carrusel_1.jpeg";
import SearchIcon from "../../assets/icon-search.png";
import "./HeroPage.css";

function HeroPage() {
    return (
        <section className="hero-page">
            <p className="hero-page__introduction">
            Hemos seleccionado cuidadosamente los mejores artículos con la mejor puntuación y los mejores reviews para que aquí no tengas que preocuparte por la calidad
            </p>
            <img
                src={SearchIcon}
                alt="Imagen de bienvenida donde se aloja el buscador"
                className="hero-page__input-search separator"
            />
            <input type="text" placeholder="Busca tu producto ideal" className="hero-page__search"/>
            <img
                src={CarouselOne}
                alt="Imagen de bienvenida donde se aloja el buscador"
                className="hero-page__carousel "
            />
        </section>
    );
}

export default HeroPage;
