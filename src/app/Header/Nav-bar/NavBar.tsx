import "./NavBar.scss";
import Link from "next/link";
import Search from "./Search/Search";
import MobileMenu from "./Mobile-Menu/MobileMenu";


function NavBar() {
  return (
    <>
      <div className="marking">
        <div className="container_nav">
          <div className="navbar-content">
            <div className="logo"><Link href="/">Kronika</Link></div>
            <div className="nav-menu">
              <ul>
                <Link href="/">
                  <li>Главная</li>
                </Link>
                <Link href="/news/Спорт">
                  <li>Новости</li>
                </Link>
                <Link href="#">
                  <li>О нас</li>
                </Link>
                <Link href="#">
                  <li>Контакты</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="search-menu_container">
            <Search />
            <MobileMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
