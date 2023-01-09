import React from 'react'
import "./styles.css";
import reportLogo from "../../../src/images/report.png";
export default function StyledButton3({ fs, file, handleCalculator }) {
  const handleFileRead = (e) => {
    e.preventDefault();
    fs.readFile(file.path, "utf-8", (err, data) => {
      console.log(data);
    });
  }
  return (
    <button className='calculate' onClick={handleCalculator}>
      <img src={reportLogo} className="reporticon"/>
      Maliyet Raporu Oluştur
    </button>
  )
}
