import React from 'react';
import '../styles/Nav.css';

const styles = {
    navStyle: {
      background: "blue"
    }
};

function Nav() {
    return (
    <div style = {styles.navStyle} className="jumbotron">
        <h1>Employee Directory</h1>
        <h6>Click on cards to filter by heading or use the search box to narrow your results</h6>
    </div>
    )
};

export default Nav;

