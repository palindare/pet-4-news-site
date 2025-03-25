import "./SearchResult.scss";
import FoundNews from "./Found-news/FoundNews";
import SearchSidebar from "./Search-sidebar/SearchSidebar";

function SearchResult() {
  return (
    <>
      <div className="background-search_result">
        <div className="marking-search_result">
          <div className="main-result">
            <FoundNews/>
            <SearchSidebar/>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
