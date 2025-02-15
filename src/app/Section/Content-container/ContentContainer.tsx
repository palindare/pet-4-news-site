"use client"
import { useEffect, useState } from "react";
import "./ContentContainer.scss";
import MainContent from "./Main-content/MainContent";
import SideBar from "./Side-bar/Sidebar";

function ContentContainer ({dataApi}) {

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
