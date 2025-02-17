import { useEffect, useState } from "react";
import "./LatestNews.scss";
import Image from "next/image";
import { Link } from "react-alice-carousel";

function LatestNews ({data}) {
    const [updateData,setUpdateData] = useState([])

    useEffect(() => {
        const changeData = data.slice(6,12)
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
        {updateData?.map(({image_url,title,category,id}) => {
            return (
            <div key={`${title}-${image_url}`} className="news-box">
                <div className="news-box_image"><Link href={`/news/${category}/${id}`}><Image src={image_url} alt="img" width={400} height={700}/></Link></div>
                <div className="news-box_title"><Link href={`/news/${category}/${id}`}>Exclusive insights from behind the scenes at Fashion Week</Link></div>
            </div>
            )
        })}
        </div>
    </div>
  </>
)
}

export default LatestNews;
