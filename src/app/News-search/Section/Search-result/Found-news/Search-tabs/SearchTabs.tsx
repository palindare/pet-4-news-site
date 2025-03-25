import "./SearchTabs.scss";
import Link from "next/link";

function SearchTabs() {
  return (
    <>
      <div className="search-tabs">
        <div className="container_tabs">
          <div className="tab">
            <div className="containe-image">
              <Link href="#">
                <div className="tab-image"></div>
              </Link>
            </div>
            <div className="tab-info">
              <div className="items-search">
                <div className="category-search"><Link href="#">Политика</Link></div>
                <div className="title-search">
                  <Link href="#">Ватикан опубликовал первое фото Папы с момента его госпитализации</Link>
                </div>
                <div className="content-search">
                  <Link href="">
                    Ватикан опубликовал первое фото папы римского с момента его
                    госпитализации. Понтифик отслужил мессу в часовне больницы
                    Джемелли, в которой проходит лечение. Врачи говорят, что его
                    состояние улучшилось.
                  </Link>
                </div>
                <div className="date-search">17.03.2025</div>
              </div>
            </div>
          </div>
          <div className="tab">
            <div className="containe-image">
              <Link href="#">
                <div className="tab-image"></div>
              </Link>
            </div>
            <div className="tab-info">
              <div className="items-search">
                <div className="category-search"><Link href="#">Политика</Link></div>
                <div className="title-search">
                  <Link href="#">Ватикан опубликовал первое фото Папы с момента его госпитализации</Link>
                </div>
                <div className="content-search">
                  <Link href="">
                    Ватикан опубликовал первое фото папы римского с момента его
                    госпитализации. Понтифик отслужил мессу в часовне больницы
                    Джемелли, в которой проходит лечение. Врачи говорят, что его
                    состояние улучшилось.
                  </Link>
                </div>
                <div className="date-search">17.03.2025</div>
              </div>
            </div>
          </div>
          <div className="tab">
            <div className="containe-image">
              <Link href="#">
                <div className="tab-image"></div>
              </Link>
            </div>
            <div className="tab-info">
              <div className="items-search">
                <div className="category-search"><Link href="#">Политика</Link></div>
                <div className="title-search">
                  <Link href="#">Ватикан опубликовал первое фото Папы с момента его госпитализации</Link>
                </div>
                <div className="content-search">
                  <Link href="">
                    Ватикан опубликовал первое фото папы римского с момента его
                    госпитализации. Понтифик отслужил мессу в часовне больницы
                    Джемелли, в которой проходит лечение. Врачи говорят, что его
                    состояние улучшилось.
                  </Link>
                </div>
                <div className="date-search">17.03.2025</div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default SearchTabs;
