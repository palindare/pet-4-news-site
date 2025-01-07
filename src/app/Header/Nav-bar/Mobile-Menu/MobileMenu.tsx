"use client"
import "./MobileMenu.scss";
import NavigationDrawer from "./Navigation-Drawer/NavigationDrawer";
import Image from "next/image";
import burger_img from "../../images/Nav-bar/burger.png"
import { useState } from "react";


function MobileMenu() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
    <>
        <div onClick={() => setShowMobileMenu(!showMobileMenu)} className="mobile-menu_container">
            <Image src={burger_img} alt="img" />
        </div>
        <NavigationDrawer showMenu={showMobileMenu} setShowMenu={setShowMobileMenu} />
    </>
    )
}

export default MobileMenu;
