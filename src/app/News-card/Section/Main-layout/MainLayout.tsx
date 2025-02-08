"use client"
import "./MainLayout.scss";
import PrimaryContent from "./Primary-content/PrimaryContent";
import NewsSidebar from "./News-sidebar/NewsSidebar";


function MainLayout ({data}) {

  return (
  <>
  <div className="main-layout">
    <div className="news-layout_wrapper">
        <PrimaryContent data={data} />
        <NewsSidebar data={data} />
    </div>
  </div>
  </>
)
}

export default MainLayout;
