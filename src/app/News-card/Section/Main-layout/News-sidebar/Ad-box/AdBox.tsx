import "./Adbox.scss";
import ad_img from "../../../../images/News-sidebar/ad.jpg"
import Link from "next/link";
import Image from "next/image";

function Adbox () {
  return (
  <>
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
  </>
)
}

export default Adbox;
