import "./SideNavbar.css";
import SideNavbarHeader from "./SideNavbarHeader";
import SideNavbarItem from "./SideNavbarItem";
import SideNavbarFooter from "./SideNavbarFooter";
import { IoHomeOutline } from "react-icons/io5";
import { BsPencilSquare, BsPlusSquare } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import React from "react";

class SideNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: true };
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <div className="side-navbar">
        <SideNavbarHeader
          onClick={this.handleExpand}
          expanded={this.state.expanded}
        />
        <ul>
          <SideNavbarItem
            name="Home"
            icon={IoHomeOutline}
            expanded={this.state.expanded}
          />
          <SideNavbarItem
            name="Create Exercise"
            icon={BsPlusSquare}
            expanded={this.state.expanded}
          />
          <SideNavbarItem
            name="Track Exercise"
            icon={BsPencilSquare}
            expanded={this.state.expanded}
          />
          <SideNavbarItem
            name="Generate Routine"
            icon={FaCogs}
            expanded={this.state.expanded}
          />
        </ul>
        <SideNavbarFooter expanded={this.state.expanded} />
      </div>
    );
  }
}

export default SideNavbar;
