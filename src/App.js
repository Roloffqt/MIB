import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <div className="App-Overlay">
        
        

        <h1 className="App-Title">
           MIB - Summermeet 2019
         </h1>

        <div className="App-ImgCon">
          <div className="App-ImgSection">
          </div>
        </div>
         <h2 className="App-Date">
           5-7 July 2019
         </h2>
         <div className="App-Tickets">

         <h4>Get your Tickets here</h4>

         <button disabled className="App-button">
          Tickets
         </button>
         <p>(Available soon)</p>
         
         </div>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
