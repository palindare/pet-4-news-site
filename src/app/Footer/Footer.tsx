import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";
import twitter_img  from "./images/twitter.png";
import youtube_img  from "./images/youtube.png";
import telegram_img  from "./images/telegram.png";
import instagram_img from "./images/instagram.png";
import facebook_img  from "./images/facebook.png";


function Footer () {
  return (
  <>
  <div className="footer">
    <div className="footer-container">
        <div className="footer-logo">Kronika</div>
        <div className="footer-discription"><span>Каждое значимое событие обретает своё отражение в заголовках газет на нашем сайте.</span></div>
        <div className="footer-links">
            <Link href="#"><div style={{width: "34px", height: "30px"}} className="footer-link"><Image src={twitter_img} alt="img" /></div></Link>
            <Link href="#"><div className="footer-link"><Image src={youtube_img} alt="img" /></div></Link>
            <Link href="#"><div className="footer-link"><Image src={telegram_img} alt="img" /></div></Link>
            <Link href="#"><div className="footer-link"><Image src={instagram_img} alt="img" /></div></Link>
            <Link href="#"><div className="footer-link"><Image src={facebook_img} alt="img" /></div></Link>
        </div>
    </div>
  </div>
  </>
)
}

export default Footer;
