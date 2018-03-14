import React from 'react';

import '../styles/components/me.css';
import logo from '../assets/logo.svg';

function Me(props) {
    return (
      <div className="me-container">
        <h1 className="me-title">Welcome Conder</h1>
        <p className="subheader me-msg">There will come a time when you believe everything is finished. That will be the beginning. </p>
        <p className="subheader me-author">- Louis L’Amour</p>
      </div>
      );
}

export default Me;