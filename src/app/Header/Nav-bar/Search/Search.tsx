import "./Search.scss";

function Search() { 
    return (
    <>
        <div className="container-seach">
            <label className="search-label" htmlFor="search">
                <input id="search" type="text" placeholder="Поиск новостей" />
            </label>
        </div>
    </>
    )
}

export default Search