import "./NavigationDrawer.scss";
import Image from "next/image";
import Link from "next/link";
import closeBurger_img from "../../../images/Nav-bar/close-burger.png"


function NavigationDrawer({showMenu,setShowMenu}) {
  return (
    <>
      <div style={{visibility: showMenu ? "visible" : "hidden"}} className="drawer-overlay_container">
        <div style={{visibility: showMenu ? "visible" : "hidden", opacity: showMenu ? "0.4" : "0"}} className="menu-backdrop"></div>
        <div onClick={() => setShowMenu(!showMenu)} style={{transform: showMenu ? "translateX(0)" : "translateX(100%)"}} className="navigation-drawer">
            <div className="container-menu">
                <div style={{visibility: showMenu ? "visible" : "hidden", opacity: showMenu ? "1" : "0"}} className="nav-menu">
                    <ul>
                        <Link href="#"><li>Главная</li></Link>
                        <Link href="#"><li>Новости</li></Link>
                        <Link href="#"><li>О нас</li></Link>
                        <Link href="#"><li>Контакты</li></Link>
                    </ul>
                </div>
                <div style={{visibility: showMenu ? "visible" : "hidden", opacity: showMenu ? "1" : "0"}} className="close-menu">
                    <Image src={closeBurger_img} alt="img" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default NavigationDrawer;
