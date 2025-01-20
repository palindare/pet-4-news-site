import "./SideColumn.scss";
import Link from "next/link";


function SideColumn() {
  return (
    <>
      <div className="side-column">
        <div className="marking-tabs_container">
          <div className="tabs_container">
            <div className="slider-tab">
              <div className="slider-news-image"></div>
              <div className="slider-info_box">
                <div className="slider-news-title"><Link href="#">Топ-10 скрытых жемчужин для путешествий в 2024 году</Link></div>
                <div className="slider-news-date"><Link href="#">Декабрь 16,2024</Link></div>
              </div>
            </div>
            <div className="slider-tab">
              <div className="slider-news-image"></div>
              <div className="slider-info_box">
                <div className="slider-news-title"><Link href="#">Топ-10 скрытых жемчужин для путешествий в 2024 году</Link></div>
                <div className="slider-news-date"><Link href="#">Декабрь 16,2024</Link></div>
              </div>
            </div>
            <div className="slider-tab">
              <div className="slider-news-image"></div>
              <div className="slider-info_box">
                <div className="slider-news-title"><Link href="#">Топ-10 скрытых жемчужин для путешествий в 2024 году</Link></div>
                <div className="slider-news-date"><Link href="#">Декабрь 16,2024</Link></div>
              </div>
            </div>
            <div className="slider-tab">
              <div className="slider-news-image"></div>
              <div className="slider-info_box">
                <div className="slider-news-title"><Link href="#">Топ-10 скрытых жемчужин для путешествий в 2024 году</Link></div>
                <div className="slider-news-date"><Link href="#">Декабрь 16,2024</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideColumn;
