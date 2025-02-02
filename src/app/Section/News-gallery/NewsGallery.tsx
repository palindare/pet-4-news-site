"use client"
import "./NewsGallery.scss";
import { useState, useEffect } from "react";
import NewsCard from "./News-card/NewsCard";
import LoadingCard from "./Loading-card/loadingCard";

function NewsGallery() {
  const [dataApi, setDataApi] = useState([])
  const [updateData, setUpdateData] = useState([])
  const newsData = []
  useEffect(() => {
    const getAPI = async () => {
      const res = await fetch("http://localhost:3001", { next: {revalidate: 3600}})
      setDataApi(await res.json())
    }
  
    getAPI()
  },[])
  useEffect(() => {
    if (Array.isArray(dataApi)) {
      const data = dataApi.slice(18,24) 
      data.forEach((value) => {
        newsData.push({ ...value,main: value === data[0] || value === data[data.length - 1] ? true : false})
        setUpdateData(newsData)
      })
    }
  }, [dataApi])
  return (
    <>
      <div className="marking-news_gallery">
        <div className="news-container">
          {updateData.length ? <NewsCard newsData={updateData}  /> : <LoadingCard/> }
        </div>
      </div>
    </>
  );
}

export default NewsGallery;
