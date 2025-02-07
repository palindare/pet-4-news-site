import "./MainLayout.scss";
import PrimaryContent from "./Primary-content/PrimaryContent";
import NewsSidebar from "./News-sidebar/NewsSidebar";


function MainLayout () {
  return (
  <>
  <div className="main-layout">
    <div className="news-layout_wrapper">
        <PrimaryContent/>
        <NewsSidebar/>
    </div>
  </div>
  </>
)
}

export default MainLayout;
