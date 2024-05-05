import React, { useEffect } from 'react';
import './App.css'; // Import your CSS file

function App() {
  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle scroll event
  const handleScroll = () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'black'; // Change to desired color when scrolled
    } else {
      navbar.style.backgroundColor = 'red';
    }
  };

  return (
    <div className="App">
      <nav id="navbar">
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="About">About</a></li>
          <li><a href="Services">Services</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        {/* Your website content here */}
      </div>
    </div>
  );
}

export default App;
