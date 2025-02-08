import "./NewsSidebar.scss";
import CategoryBox from "./Category-box/CategoryBox";
import LatestNews from "./Latest-news/LatestNews";
import Adbox from "./Ad-box/AdBox";
import SubscribeBox from "./Subscribe-box/SubscribeBox";

function NewsSidebar ({data}) {
  return (
  <>
    <div className="news-sidebar">
      <div className="wripper-sidebar">
      <CategoryBox data={data}/>
      <LatestNews data={data}/>
      <Adbox/>
      <SubscribeBox/>
      </div>
    </div>
  </>
)
}

export default NewsSidebar;
