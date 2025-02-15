"use client";
import "./CategoryBox.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function CategoryBox({ data = [] }) {
    const state = useSelector(state => state.currentCategory?.category || "Technology");
    const dispatch = useDispatch();

    const allCategory = [...new Set(data.map(item => item.category))];

    const [currentCategory, setCurrentCategory] = useState(state);

    const changeCategoryHandler = (category) => {
        if (!category) return;
        setCurrentCategory(category);
        dispatch({ type: "CHANGE_CATEGORY", payload: category });
        dispatch({ type: "CHANGE_PAGE", payload: 1 });
    };

    return (
        <div className="category-box">
            <div className="category-box_description">
                <div className="category-title">Категории</div>
                <div className="category-separation"><span></span></div>
            </div>
            <div className="category-box_list">
                {allCategory.length > 0 ? (
                    allCategory.map(value => (
                        <div 
                            key={value} 
                            onClick={() => changeCategoryHandler(value)} 
                            className={`category-box_inner ${state === value ? "category-inner_active" : ""}`}
                        >
                            {value}
                        </div>
                    ))
                ) : (
                    <p className="no-category">Нет доступных категорий</p>
                )}
            </div>
        </div>
    );
}

export default CategoryBox;
