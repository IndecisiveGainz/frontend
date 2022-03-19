import "./SideNavbar.css";
import SideNavbarHeader from "./SideNavbarHeader";
import SideNavbarItem from "./SideNavbarItem";
import SideNavbarFooter from "./SideNavbarFooter";
import { IoHomeOutline } from "react-icons/io5";
import { BsPencilSquare, BsPlusSquare } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import React from "react";
import {
  HomeComponent,
  CreateComponent,
  TrackComponent,
  GenerateComponent,
} from "./SideNavbarConstants";

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
            name={HomeComponent}
            icon={IoHomeOutline}
            expanded={this.state.expanded}
            isSelected={this.props.currentSelectedComponent === HomeComponent}
            setSelectedComponent={this.props.setSelectedComponent}
          />
          <SideNavbarItem
            name={CreateComponent}
            icon={BsPlusSquare}
            expanded={this.state.expanded}
            isSelected={this.props.currentSelectedComponent === CreateComponent}
            setSelectedComponent={this.props.setSelectedComponent}
          />
          <SideNavbarItem
            name={TrackComponent}
            icon={BsPencilSquare}
            expanded={this.state.expanded}
            isSelected={this.props.currentSelectedComponent === TrackComponent}
            setSelectedComponent={this.props.setSelectedComponent}
          />
          <SideNavbarItem
            name={GenerateComponent}
            icon={FaCogs}
            expanded={this.state.expanded}
            isSelected={
              this.props.currentSelectedComponent === GenerateComponent
            }
            setSelectedComponent={this.props.setSelectedComponent}
          />
        </ul>
        <SideNavbarFooter expanded={this.state.expanded} />
      </div>
    );
  }
}

export default SideNavbar;
