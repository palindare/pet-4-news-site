import "./PrimaryContent.scss";
import Image from "next/image";
import PageNumbers from "./Page-numbers/PageNumbers";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function PrimaryContent ({data}) {
  const [updateData,setUpdateData] = useState([])
  const [allData,setAllData] = useState([])
  const state = useSelector(state => state.currentCategory.category)
  const statePage = useSelector(state => state.currentCategory.page)
  const primaryContentRef = useRef()

  const getPageData = (data,page) => {
    if (data && data.length !== 0) {
      const startPage = (page - 1) * 8
      const endPage = startPage + 8
      return data.slice(startPage,endPage)
    }
  } 

  useEffect(() => {
    const groupedArticles = data.reduce((acc, article) => {
      if (!acc[article.category]) {
        acc[article.category] = [];
      }
      acc[article.category].push(article);
      return acc;
    }, {});
    const changeData = getPageData(groupedArticles[state],statePage)
    setAllData(groupedArticles[state])
    setUpdateData(changeData)
    if (primaryContentRef.current) {
      primaryContentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },[data,state,statePage])

  return (
  <>
    <div className="primary-content">
      <div ref={primaryContentRef} className="scroll-view"></div>
      <div className="primary-wrapper">
        {updateData && updateData.map(({image_url,id,title,content,published_date}) => {
             const text = content.length > 225 ? content.slice(0, 225).trim() + "..." : content;
             const date = new Date(published_date).toLocaleString("ru-RU", {
                 day: "2-digit",
                 month: "2-digit",
                 year: "numeric",
                 timeZone: "Europe/Moscow",
             });
          return (
        <div key={`${id}-${published_date}-${title}`} className="brief-card">
          <div className="brief-image"><Image src={image_url} alt="img" width={400} height={700}/></div>
          <div className="brief-container">
              <div className="brief-title"><span>{title}</span></div>
              <div className="brief-date">{date}</div>
              <div className="brief-discription">{text}</div>
              <div className="brief-more">Read more</div>
          </div>
        </div>
          )
        })}
      </div>
      <PageNumbers data={allData}/>
    </div>
  </>
)
}

export default PrimaryContent;
