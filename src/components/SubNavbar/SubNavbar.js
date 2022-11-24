import { Link } from "react-router-dom";
import "./SubNavbar.css";

function SubNavbar({categories}) {
    return (
        <section className="subnavbar">
            {categories.map((category) => {
                return (
                    <Link
                        className="subnavbar__item"
                        to={`category/${category.categoryKey}`}
                    >
                        {category.categoryName}
                    </Link>
                );
            })}
        </section>
    );
}

export default SubNavbar;
