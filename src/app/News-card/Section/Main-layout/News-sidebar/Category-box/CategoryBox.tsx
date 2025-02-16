"use client";
import "./CategoryBox.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";

function CategoryBox({ data = [] }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = useParams();
    const category = decodeURIComponent(params.category);
    const allCategory = [...new Set(data.map(item => item.category))];
    const [currentCategory, setCurrentCategory] = useState(category);

    // При загрузке страницы берем категорию из URL
    useEffect(() => {
        const categoryFromURL = searchParams.get("category");
        if (categoryFromURL) {
            setCurrentCategory(categoryFromURL);
            dispatch({ type: "CHANGE_CATEGORY", payload: categoryFromURL });
        }
    }, [searchParams, dispatch]);

    const changeCategoryHandler = (category) => {
        if (!category || currentCategory === category) return;

        setCurrentCategory(category);
        dispatch({ type: "CHANGE_CATEGORY", payload: category });
        dispatch({ type: "CHANGE_PAGE", payload: 1 });

        router.push(`/news/${category}`, { scroll: false });
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
                            className={`category-box_inner ${currentCategory === value ? "category-inner_active" : ""}`}
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
