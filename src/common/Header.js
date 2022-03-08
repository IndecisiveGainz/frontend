import "./Header.css";
import "./Common.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo192.png";

function Header() {
  return (
    <header className="app-header">
      <div className="nav-expander vert-center">
        <GiHamburgerMenu size={35} />
      </div>
      <div className="logo vert-center">
        <img className="vert-center" src={logo} alt="IndecisiveGainz Logo" />
        <h1 className="vert-center">IndecisiveGainz</h1>
      </div>
    </header>
  );
}

export default Header;
