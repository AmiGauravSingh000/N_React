import React from 'react';
import ReactDOM from 'react-dom/client';

// Add a Logo on Left
// Add a search bar in middle
// Add User icon on right
// Add CSS to make it look nice

const Header = () => {
  return (
<>

<header className='container' style={{display:"flex", backgroundColor:"black", height:"100px", justifyContent:"space-between", alignItems:"center", color:"white"}}>
  <div className='logo' style={{margin: "20px"}}>
    Logo
  </div>
  <div className='Search bar'  style={{margin: "20px"}}>
    searchBar
  </div>
  <div className='UserIcon' style={{margin: "20px"}}>
    UserIcon
  </div>
</header>

</>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(<Header />); // Render your component inside the root
