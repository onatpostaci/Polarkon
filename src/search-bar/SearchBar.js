import React from 'react';
import './styles.css';

export default function SearchBar({ burgerToggled }) {
  return (
    <div className={burgerToggled ? "search-box-toggled" : "search-box"}>
        <button className="btn-search"></button>
        <input type="text" className="input-search" placeholder="Aramak için yazınız..." />
    </div>

  )
}
