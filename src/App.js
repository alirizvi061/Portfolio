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
import Navigation from "./components/Navigation"

function App() {
  return (
    <Container fluid>
        <Navigation />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </BrowserRouter>
        <Footer />
    </Container>
  );
}

export default App;
