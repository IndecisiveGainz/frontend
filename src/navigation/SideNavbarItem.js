import React from "react";
import "./SideNavbarItem.css";
import "../common/Common.css";

class SideNavbarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div
          className={
            this.props.isSelected
              ? "side-navbar-item-selected flex-container"
              : "side-navbar-item flex-container"
          }
          onClick={() => this.props.setSelectedComponent(this.props.name)}
        >
          <div className="flex-left vert-center side-navbar-icon">
            <this.props.icon />
          </div>
          <div className="flex-right vert-center side-navbar-text">
            <p>{this.props.name}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default SideNavbarItem;
