// Layout.js
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      {/* Add other common elements here */}
    </div>
  );
};

export default Layout;
