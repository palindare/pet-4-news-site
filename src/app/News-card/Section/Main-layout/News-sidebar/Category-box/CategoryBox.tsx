import "./CategoryBox.scss";

function CategoryBox() {
    return (
        <>
            <div className="category-box">
                <div className="category-box_description">
                    <div className="category-title">Категории</div>
                    <div className="category-separation"><span></span></div>
                </div>
                <div className="category-box_list">
                    <div className="category-box_inner category-inner_active">Business</div>
                    <div className="category-box_inner">Lifestyle</div>
                    <div className="category-box_inner">Technology</div>
                    <div className="category-box_inner">Travel</div>
                </div>
            </div>
        </>
    )
}

export default CategoryBox;
