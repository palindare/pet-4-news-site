import PrimaryContent from "./Primary-content/Primary-content";
import Sidebar from "./Side-bar/Sidebar";
import "./MainLayout.scss";

function MainLayout({data}) {
  return (
    <>
    <div className="Main-layout">
      <div className="Main-wrapper">
        <PrimaryContent data={data}/>
        <Sidebar data={data}/>
      </div>
    </div>
    </>
  );
}

export default MainLayout;
