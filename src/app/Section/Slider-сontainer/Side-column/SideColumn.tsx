import "./SideColumn.scss";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";

function SideColumn({ data }) {
  const [delayedIndex, setDelayedIndex] = useState(0);
  const updateData = [...data.slice(-2), ...data.slice(0, 2)];
  const state = useSelector((state) => state.currentSlide.slide);
  
  useEffect(() => {
    const normalizedIndex = state >= data.length ? 0 : state; 
    setDelayedIndex(normalizedIndex);
  }, [state]);
  

  return (
    <div className="side-column">
      <div className="marking-tabs_container">
        <div className="tabs_container">
          {updateData.map(({ title, image_url, published_date }, index) => {
             const date = new Date(published_date)
             const formattedDate = date.toLocaleString("ru-RU", {
               day: "2-digit",
               month: "2-digit",
               year: "numeric",
               timeZone: "Europe/Moscow",
             });
           
            return (
              <div key={`${title}-${index}-${image_url}`} className="slider-tab">
                <div className="slider-news-image">
                  <Image src={image_url} alt="img" width={400} height={700} />
                </div>
                <div className={`slider-info_box ${delayedIndex === index ? "slider-info_active" : ""}`}>
                  <div className="slider-news-title">
                    <Link href="#">{title}</Link>
                  </div>
                  <div className="slider-news-date">
                    {formattedDate}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideColumn;
