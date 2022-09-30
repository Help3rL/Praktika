import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './layout/toolbar/toolbar';
const links ={
  "Home": {
    "link": "/",
    "icon": "#Logo"
  },
  "builder": {
    "link": "/builder",
    "icon": "Builder"
  },
  "account": {
    "icon": "Account",
    "link": {
      "home": {
        "link": "/account",
        "icon": "Home"
      },
      "history": {
        "link": "/account/history",
        "icon": "History"
      },
      "profile": {
        "link": "account/profile",
        "icon": "Profile"
      }
    }
  },
  "cart": {
    "link": "/account/cart",
    "icon": "../"
  }
}
function App() {
  const toolbar = new Toolbar('', links, './assets/images/Logo.png');
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div>
        <p>Builder,BuilderControls[Ingr[Name (price): amount] Buttons[More | Less]]</p>
        <p>{toolbar.getTest}</p>
      </div>
      
    </div>
  );
}

export default App;
