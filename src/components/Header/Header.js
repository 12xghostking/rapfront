import React from 'react';
var x=0
const Header = () => {
  if(x===0){
    window.alert("Kindly wait 30-40 seconds after clicking upload for backend to load.Thanks for the patience")
    x=1
  }
  const headerStyle = {
    background: '#f0f0f0', // Greyish shade background
    color: '#333', // Dark text color
    paddingTop: '20px',
    paddingBottom: '20px',
  };

  const headingStyle = {
    fontSize: '2rem', // Larger font size
    margin: '0', // Remove margin for the heading
  };

  return (
    <header style={headerStyle} className="text-center">
      <h1 style={headingStyle}>File-Detailer</h1>
    </header>
  );
};

export default Header;
