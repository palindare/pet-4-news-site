import "./NewsCardBig.scss";
import Image from "next/image";
import Link from "next/link";
import bookmark_img from "../../../images/News-gallery/bookmark.png"

function NewsCardBig ({image_logo,translated_title,category,published_date}) {
  const date = new Date(published_date)
  const formattedDate = date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Moscow",
  });

  return (
  <>
      <div className="news-card-main">
            <div className="news-card-image"><Image src={image_logo} width={400} height={700} alt="image" /></div>
            <div className="news-card-info">
              <div className="post-tags">
                <div className="bookmark-icon"><Image src={bookmark_img} alt="image"></Image></div>
                <div className="category-text"><Link href="#"><span>{category}</span></Link></div>
              </div>
              <div className="post-title">
                <Link href="#">
                  {translated_title}
                </Link>
              </div>
              <div className="post-date">
                {formattedDate}
              </div>
            </div>
          </div>
  </>
)
}

export default NewsCardBig;
