import React from 'react';
import "./Navbar.css";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.onNavbarSelect = this.onNavbarSelect.bind(this);
    
}

onNavbarSelect(event) {
    const newRoute = event.detail.item.id;
    this.props.history.push(('/' + newRoute));
}

addEventListeners() {
    const navigation = document.getElementById('side-navigation');
    navigation.addEventListener("selection-change", this.onNavbarSelect);
}

componentDidMount() {
    this.addEventListeners();
}

  render() {
    return (
      <div>
        <ui5-shellbar 
            class="shellbar"
            primary-title="CSCB025"
            secondary-title="Проект логистична компания"
        >
         <ui5-button icon="menu" slot="startButton" id="startButton"></ui5-button>
        </ui5-shellbar>
        <div className="sidenav">
          <ui5-side-navigation id="side-navigation">
              <ui5-side-navigation-item text="Заяви пратка" icon="sap-icon://product" id="package/ship"></ui5-side-navigation-item>
              <ui5-side-navigation-item text="Проследи пратка" icon="sap-icon://sys-find" id="package/track"></ui5-side-navigation-item>
              <ui5-side-navigation-item text="Офиси" icon="sap-icon://functional-location" id="offices"></ui5-side-navigation-item>
              <ui5-side-navigation-item text="За компанията" icon="sap-icon://building" id="company"></ui5-side-navigation-item>
          </ui5-side-navigation>          
        </div>
      </div>
    )
  }
}

export default Navbar;