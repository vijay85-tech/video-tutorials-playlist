import "./App.css";
import React, { useState } from "react";
import Footer from "./Footer";

function App() {
  const [Hori, setHori] = useState(20);
  const [Veri, setVeri] = useState(25);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState("#201e1e");
  const [outLine, setOutLine] = useState(false);

  return (
    <React.Fragment>
      <nav>
        <div className="nav-wrapper">
          <ul>
            <li className="brand-logo center">Shadow Style Generator Tool</li>
          </ul>
        </div>
      </nav>
      <div className="App">
        <div className="controls">
          <label>Select Shadow Color:{"  "}</label>
          <input
            type="color"
            min="0"
            name="Color"
            value={Color}
            max="200"
            onChange={(e) => setColor(e.target.value)}
          />
          <br />
          <br />

          <div className="switch">
            <label>
              Outline
              <input
                type="checkbox"
                name="outLine"
                value={outLine}
                onChange={() => setOutLine(!outLine)}
              />
              <span className="lever"></span>
              Inset
            </label>
          </div>
          <br />
          <label>Horizontal Length:</label>
          <input
            type="range"
            min="-200"
            name="Hori"
            value={Hori}
            max="200"
            onChange={(e) => setHori(e.target.value)}
          />
          <label>Vertical Length:</label>
          <input
            type="range"
            min="-200"
            name="Veri"
            value={Veri}
            max="200"
            onChange={(e) => setVeri(e.target.value)}
          />
          <label>Blur:</label>
          <input
            type="range"
            min="0"
            name="Blur"
            value={Blur}
            max="200"
            onChange={(e) => setBlur(e.target.value)}
          />
          <br />  
          <br />  
          <button
            className="waves-effect waves-light btn-small"
            onClick={() =>
              navigator.clipboard.writeText(
                `boxShadow: ${Hori}px ${Veri}px ${Color} ${
                  outLine ? "inset" : ""
                }`
              )
            }
          >
            Click to Copy Shadow Style
          </button>
        </div>

        <div className="output">
          <div
            className="box"
            style={{
              boxShadow: `${Hori}px ${Veri}px ${Blur}px ${Color} ${
                outLine ? "inset" : ""
              }`,
            }}
          >
            <p>
              boxShadow:{" "}
              {`${Hori}px ${Veri}px ${Color} ${outLine ? "inset" : ""}`}
            </p>
            <small>Click on Button to Copy.</small>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
