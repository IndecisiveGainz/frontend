import React from "react";
import "./App.css";
import SideNavbar from "./navigation/SideNavbar";
import {
  HomeComponent,
  CreateComponent,
  TrackComponent,
  GenerateComponent,
} from "./navigation/SideNavbarConstants";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentComponent: null };
    this.setSelectedComponent = this.setSelectedComponent.bind(this);
    this.getSelectedComponent = this.getSelectedComponent.bind(this);
  }

  setSelectedComponent(name) {
    this.setState({ currentComponent: name });
  }

  getSelectedComponent() {
    let component;

    // TODO - Create the components and add to the switch statement cases
    switch (this.state.currentComponent) {
      case HomeComponent:
        component = <p>TODO - HOME</p>;
        break;
      case CreateComponent:
        component = <p>TODO - CREATE</p>;
        break;
      case TrackComponent:
        component = <p>TODO - TRACK</p>;
        break;
      case GenerateComponent:
        component = <p>TODO - GENERATE</p>;
        break;
      default:
        component = <p>TODO - NONE SELECTED</p>;
        break;
    }

    return component;
  }

  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <SideNavbar setSelectedComponent={this.setSelectedComponent} />
          {this.getSelectedComponent()}
        </div>
      </div>
    );
  }
}

export default App;
