// type rcc to get react boilerplate

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";

import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";


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
