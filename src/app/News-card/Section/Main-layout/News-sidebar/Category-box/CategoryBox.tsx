"use client"
import "./CategoryBox.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function CategoryBox({data}) {
    const [currentCategory, setCurrentCategory] = useState("Technology")
    const [allCategory,setAllCategory] = useState([])
    const state = useSelector(state => state.currentCategory.category)
    const dispatch = useDispatch()
    useEffect(() => {
        if (data && data.length) {
            const category = []
            data.forEach(value => {
                if (category && category.every(items => items !== value.category))
                    category.push(value.category)
                }) 
            setAllCategory(category)
        }
    },[data])

    console.log(data)

    const changeCategoryHandler = (category) => {
        setCurrentCategory(category)
        dispatch({type: "CHANGE_CATEGORY", payload: category})
        dispatch({type: "CHANGE_PAGE", payload: 1})
    }

    return (
            <div className="category-box">
                <div className="category-box_description">
                    <div className="category-title">Категории</div>
                    <div className="category-separation"><span></span></div>
                </div>
                <div className="category-box_list">
                    {allCategory && allCategory.map(value => {
                        return (
                            <div key={value} onClick={() => changeCategoryHandler(value)} className={`category-box_inner ${state === value ? "category-inner_active" : null } `}>{value}</div>
                        )
                    })}
                </div>
            </div>
    )
}

export default CategoryBox;
