import React, { useState } from 'react';
/*import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';*/
import logo from './logo.svg';
import polarkonLogo from './images/logo-2-new.png';
import './App.css';
import StyledButton1 from './styled-buttons/styled-button1/StyledButton1';
import StyledButton2 from './styled-buttons/styled-button2/StyledButton2';
import StyledButton3 from './styled-buttons/styled-button3/StyledButton3';
import Sidebar from './sidebar/Sidebar';
import SearchBar from './search-bar/SearchBar';

const fs = window.require('fs')
const { app } = window.require('@electron/remote/main')
const getAllEquipment = window.require('./src/server/server.js');
const database = window.require('./src/server/db/index.js');
// const db = window.require("./server/db");

const handleCalculator = async () => {
  const res = await database.query("SELECT * FROM equipment");
  console.log(res.rows);
}

function App() {
    const [file, setFile] = useState({
      path:""
    })
    return (
      <div className="overlay">
        <Sidebar />

        <div className="header">
          <img src={polarkonLogo} className="App-logo" alt="logo" />
          <h2>Polarkon Maliyet Tahmini</h2>
        </div>
        <div className="upload-ccl" style={{marginTop:"2rem"}}>
          <StyledButton2 fs ={fs} setFile={setFile}/>
          <div className="vl"></div>
          <div className='ccl-info'>
            <div className='ccl-inner'>
              <label for="country">Toplam Boru Sayısı:</label>  
              <input type="text" id="country" name="country" value="25" readonly />
            </div>
            <div className='ccl-inner'>
              <label for="country">Boru Tipi Sayısı:</label>  
              <input type="text" id="country" name="country" value="25" readonly />
            </div>
            <div className='ccl-inner'>
              <button class="btn">Detaylı Bilgi</button>
            </div>
          </div>
        </div>
        <div className='calc-del-btns'>
          <StyledButton3 fs={fs} file={file} handleCalculator={handleCalculator}/>
        </div>
      </div>
    );
  }


export default App;
