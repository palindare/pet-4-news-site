"use client"; // Указываем, что компонент клиентский
import "./PrimaryContent.scss";
import Image from "next/image";
import PageNumbers from "./Page-numbers/PageNumbers";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-alice-carousel";
import { useParams } from "next/navigation";

function PrimaryContent({ data = [] }) { 
  const [updateData, setUpdateData] = useState([]);
  const [allData, setAllData] = useState([]);
  const state = useSelector(state => state.currentCategory?.category || ""); 
  const statePage = useSelector(state => state.currentCategory?.page || 1);
  const primaryContentRef = useRef(null);
  const params = useParams()
  const category = decodeURIComponent(params.category);
  console.log(category)
  
  const getPageData = (data, page) => {
    if (!data || data.length === 0) return []; 
    const startPage = (page - 1) * 8;
    return data.slice(startPage, startPage + 8);
  };

  useEffect(() => {
    if (!data || data.length === 0) return;

    const groupedArticles = data.reduce((acc, article) => {
      if (!acc[article.category]) acc[article.category] = [];
      acc[article.category].push(article);
      return acc;
    }, {});

    console.log(groupedArticles )
    const changeData = getPageData(groupedArticles[category], statePage);
    setAllData(groupedArticles[category] || []); 
    setUpdateData(changeData || []);

    if (primaryContentRef.current) {
      primaryContentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [data, category, statePage]);

  return (
    <div className="primary-content">
      <div ref={primaryContentRef} className="scroll-view"></div>
      <div className="primary-wrapper">
        {updateData.length > 0 ? (
          updateData.map(({ image_url, id, translated_title, translated_content,category, published_date }) => {
            const text = translated_content.length > 190 ? translated_content.slice(0, 190).trim() + "..." : translated_content;
            const titleText = translated_title.length > 60 ? translated_title.slice(0, 60).trim() + "..." : translated_title;

            const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              timeZone: "Europe/Moscow",
            });
            const date = dateFormatter.format(new Date(published_date));

            return (
              <div key={`${id}-${published_date}`} className="brief-card">
                <Link href={`/news/${category}/${id}`}><div className="brief-image"><Image src={image_url} alt="img" width={400} height={700} priority /></div></Link>
                
                <div className="brief-container">
                <Link href={`/news/${category}/${id}`}><div className="brief-title"><span>{titleText}</span></div></Link>
                  <div className="brief-date">{date}</div>
                  <div className="brief-discription">{text}</div>
                  <Link href={`/news/${category}/${id}`}><div className="brief-more">Read more</div></Link>
                </div>
              </div>
            );
          })
        ) : (
          null
        )}
      </div>
      <PageNumbers data={allData} />
    </div>
  );
}

export default PrimaryContent;
