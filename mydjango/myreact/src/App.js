import './App.css';
import React, {Component, useEffect, useState} from 'react';
import Routing from './Routing';

function App() {

  fetch('http://127.0.0.1:8000/api')
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    
      <div id='main_frame'>
        <head>
          <title>E Manager</title>
          <link href="/App.css" rel="stylesheet"></link>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin></link>
          <link href='//fonts.googleapis.com/css?family=Lobster&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
        </head>
        <div>
          
        </div>
        <Routing />
      </div>
  );
}

export default App;
