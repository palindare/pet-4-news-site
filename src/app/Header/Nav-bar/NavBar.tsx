import "./NavBar.scss";
import Link from "next/link";
import Search from "./Search/Search";

function NavBar() {
  return (
    <>
      <div className="marking">
        <div className="container_nav">
          <div className="navbar-content">
            <div className="logo"><Link href="#">Kronika</Link></div>
            <div className="nav-menu">
              <ul>
                <Link href="#">
                  <li>Главная</li>
                </Link>
                <Link href="#">
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
          <Search />
        </div>
      </div>
    </>
  );
}

export default NavBar;
