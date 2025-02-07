import "./NewsSidebar.scss";
import CategoryBox from "./Category-box/CategoryBox";
import LatestNews from "./Latest-news/LatestNews";
import Adbox from "./Ad-box/AdBox";
import SubscribeBox from "./Subscribe-box/SubscribeBox";

function NewsSidebar () {
  return (
  <>
    <div className="news-sidebar">
      <div className="wripper-sidebar">
      <CategoryBox/>
      <LatestNews/>
      <Adbox/>
      <SubscribeBox/>
      </div>
    </div>
  </>
)
}

export default NewsSidebar;
