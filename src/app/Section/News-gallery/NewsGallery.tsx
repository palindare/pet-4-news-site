import "./NewsGallery.scss";
import Image from "next/image";
import Link from "next/link";
import bookmark_img from "../images/News-gallery/bookmark.png";

function NewsGallery() {
  return (
    <>
      <div className="marking-news_gallery">
        <div className="news-container">
          <div className="news-card-main">
            <div className="news-card-info">
              <div className="post-tags">
                <div className="bookmark-icon">
                  <Image src={bookmark_img} alt="img" />
                </div>
                <div className="category-text">
                  <Link href="#">
                    <span>Стиль</span>
                  </Link>
                </div>
              </div>
              <div className="post-title">
                <Link href="#">
                  Тренды сезона: Как создать идеальный осенний образ
                </Link>
              </div>
              <div className="post-date">Декабрь 21.2024г</div>
            </div>
          </div>
          <div className="news-card">
            <div className="post-tags_card">
              <div className="bookmark-icon_card">
                <Image src={bookmark_img} alt="img" />
              </div>
              <div className="category-text_card">
                <Link href="#">
                  <span>Путешествие</span>
                </Link>
              </div>
            </div>
            <div className="post-title_card"><Link href="#">Топ-10 скрытых жемчужин для путешествий в 2024 году</Link></div>
            <div className="post-date_card">Декабрь 21.2024г</div>
          </div>
          <div className="news-card">
            <div className="post-tags_card">
              <div className="bookmark-icon_card">
                <Image src={bookmark_img} alt="img" />
              </div>
              <div className="category-text_card">
                <Link href="#">
                  <span>Путешествие</span>
                </Link>
              </div>
            </div>
            <div className="post-title_card"><Link href="#">Топ-10 скрытых жемчужин для путешествий в 2024 году</Link></div>
            <div className="post-date_card">Декабрь 21.2024г</div>
          </div>
          <div className="news-card">
            <div className="post-tags_card">
              <div className="bookmark-icon_card">
                <Image src={bookmark_img} alt="img" />
              </div>
              <div className="category-text_card">
                <Link href="#">
                  <span>Путешествие</span>
                </Link>
              </div>
            </div>
            <div className="post-title_card"><Link href="#">Топ-10 скрытых жемчужин для путешествий в 2024 году</Link></div>
            <div className="post-date_card">Декабрь 21.2024г</div>
          </div>
          <div className="news-card">
            <div className="post-tags_card">
              <div className="bookmark-icon_card">
                <Image src={bookmark_img} alt="img" />
              </div>
              <div className="category-text_card">
                <Link href="#">
                  <span>Путешествие</span>
                </Link>
              </div>
            </div>
            <div className="post-title_card"><Link href="#">Топ-10 скрытых жемчужин для путешествий в 2024 году</Link></div>
            <div className="post-date_card">Декабрь 21.2024г</div>
          </div>
          <div className="news-card-main">
            <div className="news-card-info">
              <div className="post-tags">
                <div className="bookmark-icon">
                  <Image src={bookmark_img} alt="img" />
                </div>
                <div className="category-text">
                  <Link href="#">
                    <span>Стиль</span>
                  </Link>
                </div>
              </div>
              <div className="post-title">
                <Link href="#">
                  Тренды сезона: Как создать идеальный осенний образ
                </Link>
              </div>
              <div className="post-date">Декабрь 21.2024г</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsGallery;
