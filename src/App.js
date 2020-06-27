import React, { useState } from 'react';
import Tabs from './components/Tabs';
import AddressBar from './components/AddressBar';
import './App.css';

function App() {
  const [browsers, setBrowser] = useState([
    "https://learn.chrisoncode.io",
    "https://dev.to"
  ])
  const [activeBrowser, setActiveBrowser] = useState(0);
  const url = browsers[activeBrowser];

  function chooseBrowser(id) {
    setActiveBrowser(id);
  }

  function addBrowser() {
    const newBrowsers = [...browsers, ""]
    setBrowser(newBrowsers);
    setActiveBrowser(newBrowsers.length - 1);
  }

  function updateBrowser(){
    const newBrowsers = [...browsers];
    newBrowsers[activeBrowser] = url;
    setBrowser(newBrowsers);
  }

  return (
    <div className="app">
      <div className="browser">
        <Tabs browsers={browsers} active={activeBrowser}
          choose={chooseBrowser}
          add={addBrowser} />

        <AddressBar 
          update={updateBrowser}
          url={url}
          />

        <div className="viewport">
          {url ? (
            <iframe src={url}
            title="Something" />
          ): (<>New Tab Page </>)}
        </div>
      </div>
    </div>
  );
}

export default App;
