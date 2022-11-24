import "./Landing.css";
import Navbar from "../../components/Navbar/Navbar";
import SubNavbar from "../../components/SubNavbar/SubNavbar.js";
import HeroPage from "../../components/HeroPage/HeroPage";
import CategoryCardList from "../../components/CategoryCardList/CategoryCardList";
import Footer from "../../components/Footer/Footer";

function Landing({categories}) {
    return (
        <>
            <Navbar />
            <SubNavbar categories={categories} />
            <HeroPage />
            <CategoryCardList sectionTitle={"Categorias"} categories={categories} />
            <Footer />
        </>
    );
}

export default Landing;
