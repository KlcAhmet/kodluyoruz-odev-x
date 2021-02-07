import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import axios from "axios"

/* import './App.css'; */


function App() {

  useEffect(() => {
    /* linkteki data'yı getir */
    axios.get('http://localhost:3004/headerLinks')
      .then(function ({ data }) {
        console.log({ data })
        /* setLinks(data) */
      })
      .catch(function (error) {
        console.log("Hata")
        console.log(error)
      })
  }, [])



  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
