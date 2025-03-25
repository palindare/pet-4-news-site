import "./FoundNews.scss";
import HeaderBar from "./Header-bar/HeaderBar";
import SearchTabs from "./Search-tabs/SearchTabs";

function FoundNews () {
  return (
    <>
    <div className="marking-found-news">
        <HeaderBar/>
        <SearchTabs/>
    </div>
    </>
  );
}

export default FoundNews;
