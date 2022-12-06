// type rfc to get react functional component boilerplate
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";

import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";


function App() {
  return (
    <Container fluid>
      <Navigation />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact}/>
        </BrowserRouter> 
      <Footer />
    </Container>
  );
}

export default App;
