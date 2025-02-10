"use client"
import "./MainLayout.scss";
import PrimaryContent from "./Primary-content/PrimaryContent";
import NewsSidebar from "./News-sidebar/NewsSidebar";
import LoadingPrimaryContent from "./Primary-content/Loading-primary/LoadingPrimaryContent";

function MainLayout ({data}) {

  return (
  <>
  <div className="main-layout">
    <div className="news-layout_wrapper">
        {data && data.length !== 0 ? <PrimaryContent data={data} /> : <LoadingPrimaryContent/> }
        <NewsSidebar data={data} />
    </div>
  </div>
  </>
)
}

export default MainLayout;
