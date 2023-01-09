import React, { useState } from 'react';
import './styles.css';
import HomeIcon from './assets/icon-home.svg'; 
import SearchBar from '../search-bar/SearchBar';
export default function Sidebar() {

  const [burgerToggled, setBurgerToggled] = useState(false);

  const handleBurgerToggled = () => {
    if(burgerToggled){
      setBurgerToggled(false);
    }
    else{
      setBurgerToggled(true);
    }
  }
  return (
    
    <div className={burgerToggled ? "toggled" : "normal"}>
      <SearchBar burgerToggled={burgerToggled} />
      <div className={"sidebar" }>
        <div className="sidebar-inner">
          <header className="sidebar-header">
            <button
              type="button"
              className={burgerToggled ? "sidebar-burger-toggled" : "sidebar-burger"}
              onClick={handleBurgerToggled}
            ></button>
          </header>
          <nav className="sidebar-nav">
            <button type="button" className='home-btn'>
              <div/>
              <span>Anasayfa</span>
            </button>
            <button type="button" className='settings-btn'>
              <div/>
              <span style={{animationDelay: "0.1s"}}>Ayarlar</span>
            </button>
            <button type="button" className='levels-btn'>
              <div/>
              <span style={{animationDelay: "0.2s"}}>Levels</span>
            </button>
            <button type="button" className='accounts-btn'>
              <div/>
              <span style={{animationDelay: "0.3s"}}>Accounts</span>
            </button>
          </nav>
          <footer className="sidebar-footer">
            <button type="button" className='logout-btn'>
              <div />
              <span>Logout</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}
