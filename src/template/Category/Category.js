import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import CategoryKitchenImg from "../../assets/category-kitchen.jpg";
import "./Category.css";
import CategoryCardList from "../../components/CategoryCardList/CategoryCardList";
import SubNavbar from "../../components/SubNavbar/SubNavbar";

function Category({categories}) {
    let { id } = useParams();
    //There should be only one result per ID
    const category = categories.filter((category) => category.categoryKey === id)[0];
    console.log(category);
    return (
        <>
            <Navbar />
            <SubNavbar categories={categories} />
            <section className="category">
                <div className="category__product-list">
                    <CategoryCardList sectionTitle={category.categoryName} categories={category.subcategories}/>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Category;
