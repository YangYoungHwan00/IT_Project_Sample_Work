import './App.css';
import React, {Component, useEffect, useState} from 'react';
import Routing from './Routing';

function App() {

  return (
    
      <div id='main_frame'>
        <head>
          <title>E Manager</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" integrity="sha256-2TnSHycBDAm2wpZmgdi0z81kykGPJAkiUY+Wf97RbvY=" crossOrigin="anonymous" />
        </head>
        <div>
          
        </div>
        <Routing />
      </div>
  );
}

export default App;
