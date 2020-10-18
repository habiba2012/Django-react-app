import React from "react";
import "./App.css";
import Header from "./components/Nav/Header";
import About from "./components/pages/About";
import Sustainability from './components/pages/Sustainability'
import Community from "./components/pages/Community";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NewMap from "./components/map/NewMap";
// import MapComponent from "./components/map/MapComponent"
import Add from "./components/Add";
import styled from "styled-components";
import Help from "./components/Help";


const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/">
            <Header />
            <NewMap />
          </Route>
          <Route path="/add">

            <Add />
          </Route>
          <Route path="/help">

            <Help />
          </Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/community' component={Community} />
          <Route exact path='/sustainability' component={Sustainability} />
          <Route exact path='/contacts' component={Contact} />
        </Switch>
      </Container>
    </BrowserRouter>

  );
};

const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  overflow: hidden;
  

`;

export default App;
