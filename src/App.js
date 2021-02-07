import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import axios from "axios"

/* componenet */
import Header from "./components/Header"
import Anasayfamain from "./components/Anasayfamain"
/* css */
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';


function App() {
  const [links, setLink] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3004/headerLinks')
      .then(function ({ data }) {
        console.log({ data })
        setLink(data)
      })
      .catch(function (error) {
        console.log("Hata")
        console.log(error)
      })
  }, [])

  return (
    <Router>
      <Header links={links} />

      <Switch>
        <Route path="/blog" />
        <Route path="/projects" />
        <Route path="/about" />
        <Route path="/">
          <Anasayfamain />
        </Route>
      </Switch>

    </Router >
  );
}

export default App;
