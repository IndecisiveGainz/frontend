import "./SideNavbarFooter.css";
import "../common/Common.css";
import { IoLogOutOutline } from "react-icons/io5";

function SideNavbarFooter() {
  return (
    <div className="side-navbar-footer flex-container">
      <div className="side-navbar-footer-icon flex-left vert-center">
        <IoLogOutOutline />
      </div>
      <div className="side-navbar-footer-text flex-right vert-center">
        <p>Logout</p>
      </div>
    </div>
  );
}

export default SideNavbarFooter;
