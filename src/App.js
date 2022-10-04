// type rcc to get react boilerplate

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// import logo from './logo.svg';
//Browser Router and Link Components
import { BrowserRouter, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <Container fluid>
      <Navigation />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
        </BrowserRouter> 
      <Footer />
    </Container>
  );
}

export default App;
