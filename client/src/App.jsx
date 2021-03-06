import React from "react";
import Navbar from "./components/Navbar";
import Display from "./components/display/Display";
import "./App.css";
import styled from "styled-components";
import Logo from "./assets/logo.png";
import Alert from "./components/common/Alert";

const AppStyles = styled.div`
  margin: auto;
  display: block;
  width: max-content;
  text-align: center;
  .logo {
    width: 250px;
    margin: 30px 0;
  }
`;

const App = () => {
  return (
    <>
      <AppStyles>
        <img src={Logo} className="logo" />
        <Navbar />
        <Display />
      </AppStyles>
      <Alert />
    </>
  );
};

export default App;
