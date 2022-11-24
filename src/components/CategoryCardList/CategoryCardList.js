import "./CategoryCardList.css";
import { Link } from "react-router-dom";

function CategoryCardList({ sectionTitle, categories }) {
    return (
        <section className="category-card-list">
            <p className="p-title">{sectionTitle}</p>
            <div className="category-card-list__categories">
                {categories.map((category) => {
                    return (
                        <a
                            href={`/category/${category.categoryKey}`}
                            className="category-card-list__categories__card"
                        >
                            <img
                                src={category.categoryImg}
                                alt="TODO"
                                className="category-card-list__categories__card__image"
                            />
                            <p className="category-card-list__categories__card__content">
                                {category.categoryName}
                            </p>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}

export default CategoryCardList;
