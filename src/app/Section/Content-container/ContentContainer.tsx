import "./ContentContainer.scss";
import MainContent from "./Main-content/MainContent";
import SideBar from "./Side-bar/Sidebar";

function ContentContainer () {
  return (
  <>
        <div className="news-content">
            <div className="marking-content_container">
                <div className="page-layout">
                    <MainContent/>
                    <SideBar/>
                </div>
            </div>
        </div>
  
  </>
)
}

export default ContentContainer;
