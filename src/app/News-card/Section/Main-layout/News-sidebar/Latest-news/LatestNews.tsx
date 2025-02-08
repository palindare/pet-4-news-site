import { useEffect, useState } from "react";
import "./LatestNews.scss";
import Image from "next/image";

function LatestNews ({data}) {
    const [updateData,setUpdateData] = useState([])

    useEffect(() => {
        const changeData = data.slice(0,6)
        setUpdateData(changeData)
    },[data])
    
  return (
  <>
    <div className="latest-news_box">
        <div className="news-discription_box">
            <div className="news-box_title">Последние новости</div>
            <div className="news-box_separation"></div>
        </div>
        <div className="news-container_box">
        {updateData?.map(({image_url,title}) => {
            return (
            <div key={`${title}-${image_url}`} className="news-box">
                <div className="news-box_image"><Image src={image_url} alt="img" width={400} height={700}/></div>
                <div className="news-box_title">Exclusive insights from behind the scenes at Fashion Week</div>
            </div>
            )
        })}
        </div>
    </div>
  </>
)
}

export default LatestNews;
