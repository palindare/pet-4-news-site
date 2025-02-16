import "./Sidebar.scss";
import Subscribe from "./Subscribe-box/Subscribe";
import Adbox from "@/app/News-card/Section/Main-layout/News-sidebar/Ad-box/AdBox";

function Sidebar() {
  return (
    <>
        <div className="sidebar-container">
            <div className="position-items">
                <Subscribe/>
                <Adbox/>
            </div>
        </div>
    </>
  );
}

export default Sidebar;
