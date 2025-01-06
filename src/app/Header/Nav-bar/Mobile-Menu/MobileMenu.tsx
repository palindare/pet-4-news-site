import "./MobileMenu.scss";
import Image from "next/image";
import burger_img from "../../images/Nav-bar/burger.png"


function MobileMenu() {
    return (
    <>
        <div className="mobile-menu_container">
            <Image src={burger_img} alt="img" />
        </div>
    </>
    )
}

export default MobileMenu;
