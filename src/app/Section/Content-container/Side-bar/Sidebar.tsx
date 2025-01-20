import "./SideBar.scss";
import Image from "next/image";
import Link from "next/link";
import ad_img from "../../images/Side-bar/ad.jpg"


function SideBar () {
  return (
  <>
  <div className="sidebar-container">
    <div className="sidebar-wrapper">
          <div className="category-list">
            <div className="category-tab">
              <div className="category-img">
                {/* <Image src={test_img} alt="img" /> */}
                </div>
              <div className="category-text"><Link href="#">Стиль</Link></div>
            </div>
            <div className="category-tab">
              <div className="category-img">
                {/* <Image src={test_img} alt="img" /> */}
                </div>
              <div className="category-text"><Link href="#">Стиль</Link></div>
            </div>
            <div className="category-tab">
              <div className="category-img">
                {/* <Image src={test_img} alt="img" /> */}
                </div>
              <div className="category-text"><Link href="#">Стиль</Link></div>
            </div>
            <div className="category-tab">
              <div className="category-img">
                {/* <Image src={test_img} alt="img" /> */}
                </div>
              <div className="category-text"><Link href="#">Стиль</Link></div>
            </div>
          </div>
          <div className="ad-container">
            <div className="ad-card">
              <div className="ad-card-image"><Image src={ad_img} alt="image" /></div>
              <div className="ad-card-content">
                <div className="ad-main-text">Ваша реклама здесь</div>
                <div className="ad-text">Ad Size: 394x300 px</div>
                <div className="ad-button"><Link href="#"><button>Купить</button></Link></div>
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-content">
              <div className="gallery-title">Галерея</div>
              <div className="gallery-separation"></div>
            </div>
            <div className="gallery-wrapper">
              <Link href="#"><div className="gallery-card"></div></Link>
              <Link href="#"><div className="gallery-card"></div></Link>
              <Link href="#"><div className="gallery-card"></div></Link>
              <Link href="#"><div className="gallery-card"></div></Link>
              <Link href="#"><div className="gallery-card"></div></Link>
              <Link href="#"><div className="gallery-card"></div></Link>
            </div>
          </div>
    </div>
  </div>
  </>
)
}

export default SideBar;
