"use client"
import { useEffect, useState } from "react";
import "./ContentContainer.scss";
import MainContent from "./Main-content/MainContent";
import SideBar from "./Side-bar/Sidebar";

function ContentContainer () {
    const [dataApi, setDataApi] = useState([])
      useEffect(() => {
        const getAPI = async () => {
          const res = await fetch("http://localhost:3001", { next: {revalidate: 3600}})
          setDataApi(await res.json())
        }
        getAPI()
      },[])

  return (
  <>
        <div className="news-content">
            <div className="marking-content_container">
                <div className="page-layout">
                    <MainContent dataApi={dataApi}/>
                    <SideBar dataApi={dataApi}/>
                </div>
            </div>
        </div>
  
  </>
)
}

export default ContentContainer;
