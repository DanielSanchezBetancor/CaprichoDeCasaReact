import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./templates/Landing/Landing";
import Category from "./template/Category/Category";
import CategoryKitchenImg from "./assets/category-kitchen.jpg";
import CategoryLivingRoomImg from "./assets/category-living-room.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));

const categories = [
    { categoryKey: "kitchen", categoryName: "Cocina", categoryImg: CategoryKitchenImg },
    { categoryKey: "living-room", categoryName: "Salón", categoryImg: CategoryLivingRoomImg },
    { categoryKey: "bedroom", categoryName: "Dormitorio", categoryImg: CategoryKitchenImg },
    { categoryKey: "bathroom", categoryName: "Baño", categoryImg: CategoryLivingRoomImg },
    { categoryKey: "fancy", categoryName: "Caprichos", categoryImg: CategoryKitchenImg },
    { categoryKey: "playroom", categoryName: "Jardín", categoryImg: CategoryLivingRoomImg },
    { categoryKey: "digital-house", categoryName: "Hogar digital", categoryImg: CategoryKitchenImg },
    { categoryKey: "customizable", categoryName: "Customizable", categoryImg: CategoryLivingRoomImg },
];
const commonSubcategories = [
    { categoryKey: "cleaning", categoryName: "Limpieza", categoryImg: CategoryKitchenImg },
    { categoryKey: "furniture", categoryName: "Muebles", categoryImg: CategoryLivingRoomImg },
    { categoryKey: "illumination", categoryName: "Iluminación", categoryImg: CategoryKitchenImg },
    { categoryKey: "decoration", categoryName: "Decoración", categoryImg: CategoryLivingRoomImg },
    { categoryKey: "accesories", categoryName: "Accesorios", categoryImg: CategoryKitchenImg },
    { categoryKey: "climatization", categoryName: "Climatización", categoryImg: CategoryLivingRoomImg },
    { categoryKey: "electronic", categoryName: "Electrónica", categoryImg: CategoryKitchenImg },
];
const uniqueSubcategories = [
    {
        categoryName: "Cocina",
        uniqueSubcategories: [
            {
                categoryName: "Grandes electrodomésticos",
                categoryImg: CategoryLivingRoomImg,
            },
            {
                categoryName: "Pequeños electrodomésticos",
                categoryImg: CategoryKitchenImg,
            },
            {
                categoryName: "Menaje",
                categoryImg: CategoryLivingRoomImg,
            },
        ],
    },
];
for (let i = 0; i < categories.length; i++) {
    categories[i].subcategories = commonSubcategories;
    for (let j = 0; j < uniqueSubcategories.length; j++) {
        if (
            categories[i].categoryName === uniqueSubcategories[j].categoryName
        ) {
            for (let uniqueSubcategory of uniqueSubcategories[j]
                .uniqueSubcategories) {
                categories[i].subcategories.push(uniqueSubcategory);
            }
        }
    }
}
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing categories={categories} />} />
                <Route
                    path="/category/:id"
                    element={<Category categories={categories} />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
