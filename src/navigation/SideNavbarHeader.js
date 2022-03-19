import "./SideNavbarHeader.css";
import logo from "../assets/logo192.png";

function SideNavbarHeader(props) {
  return (
    <div className="side-navbar-header" onClick={props.onClick}>
      <div className="side-navbar-header-logo">
        <img src={logo} alt="IndecisiveGainz Logo" />
      </div>
      <div className="side-navbar-header-text">
        <p>IndecisiveGainz</p>
      </div>
    </div>
  );
}

export default SideNavbarHeader;
