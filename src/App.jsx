import React from 'react';
import './App.css';

function SocialIcons() {
  return (
    <div className="social">
      <a href="https://www.youtube.com/@saunagamedev?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
        <img src="/assets/youtube.svg" alt="YouTube" className="social-icon" />
      </a>
      <a href="https://discord.gg/Dv3HeqxeKx" target="_blank" rel="noopener noreferrer">
        <img src="/assets/discord.svg" alt="Discord" className="social-icon" />
      </a>
      <a href="https://instagram.com/saunacart1" target="_blank" rel="noopener noreferrer">
        <img src="/assets/instagram.svg" alt="Instagram" className="social-icon" />
      </a>
      <a href="https://store.steampowered.com/app/3408560" target="_blank" rel="noopener noreferrer">
        <img src="/assets/steam.svg" alt="Steam" className="social-icon" />
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/assets/newvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <img src="/assets/logo.png" alt="Game Logo" className="game-logo" />
          <p>The Ultimate Sauna Adventure Awaits in July 2025</p>
          <a
            href="https://store.steampowered.com/app/3408560"
            target="_blank"
            rel="noopener noreferrer"
            className="steam-wishlist-button"
          >
            <img src="/assets/steam.svg" alt="Steam Logo" className="steam-icon" />
            Wishlist now on Steam!
          </a>
          or:
          <br/>
          <form 
            className="signup" 
            action="https://docs.google.com/forms/d/e/1FAIpQLSdbdMOjKnhpxkqrzI8L7uJcjgQXELkX7MgIKFJZMstamiC5dg/viewform" 
            method="GET" 
            target="_blank"
          >
            <input type="email" name="entry.1334179970" placeholder="Your email address" required />
            <button type="submit">Notify Me</button>
          </form>


          
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h3>Why You'll Love It</h3>
        <div className="feature-list">
          <div className="feature-item">
            <img src="/assets/map_icon.png" alt="Explore Finland" />
            <p>12 Real Sauna Levels</p>
          </div>
          <div className="feature-item">
            <img src="/assets/loyly_icon.png" alt="Throw Löyly" />
            <p>Innovative löyly mechanics</p>
          </div>
          <div className="feature-item">
            <img src="/assets/sun_icon.png" alt="Save the world" />
            <p>Your mission: Save the world</p>
          </div>
          
        </div>
        
      </section>
      
      {/* Footer */}
      <footer>
        <p>All made by a single man</p>
        
        <SocialIcons />
      </footer>
    </div>
  );
}

export default App;
