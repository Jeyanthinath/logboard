import React, { Component } from 'react';


class Menu extends Component {
  render() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"> <i style={{fontSize: '45px'}} className="material-icons"> dashboard </i> Log Board</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><i style={{fontSize: '45px'}} className="material-icons"> account_circle </i></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
}

export default Menu;