import "./NewsSidebar.scss";
import CategoryBox from "./Category-box/CategoryBox";
import LatestNews from "./Latest-news/LatestNews";
import Adbox from "./Ad-box/AdBox";
import SubscribeBox from "./Subscribe-box/SubscribeBox";
import LoadingCategoryBox from "./Category-box/Loading-category/LoadingCategoryBox";
import LoadingLatesNews from "./Latest-news/Loading-lates/LoadingLatesNews";

function NewsSidebar ({data}) {
  return (
  <>
    <div className="news-sidebar">
      <div className="wripper-sidebar">
      {data && data.length !== 0 ? <CategoryBox data={data}/> : <LoadingCategoryBox/>}
      {data && data.length !== 0 ? <LatestNews data={data}/> : <LoadingLatesNews/>}
      <Adbox/>
      <SubscribeBox/>
      </div>
    </div>
  </>
)
}

export default NewsSidebar;
