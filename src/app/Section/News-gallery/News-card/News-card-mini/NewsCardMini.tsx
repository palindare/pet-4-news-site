import "./NewsCardMini.scss";
import bookmark_img from "../../../images/News-gallery/bookmark.png"
import Image from "next/image";
import Link from "next/link";
import { text } from "stream/consumers";

function NewsCardMini ({image_logo,title,category,published_date}) {
  const date = new Date(published_date)
  const formattedDate = date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Moscow",
  });

  const text = title[50] ? title.slice(0,54).trim() + "..." : title
  

  return (
  <> 
    <div className="news-card">
            <div className="news-card-image"><Image src={image_logo} width={400} height={700} alt="image" /></div>
            <div className="post-tags_card">
                <div className="bookmark-icon_card"><Image src={bookmark_img} alt="image"></Image></div>
                <div className="category-text_card"><Link href="#"><span>{category}</span></Link></div>
            </div>
            <div className="post-title_card"><Link href="#">{text}</Link></div>
            <div className="post-date_card">
                {formattedDate}
              </div>
          </div>
  </>
)
}

export default NewsCardMini;
