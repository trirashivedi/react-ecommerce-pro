import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Errorpage from './Errorpage';
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider} from "styled-components";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

    const theme ={
        colors:{
            heading:"rgb(24,24,19)",
            text:"rgba(29,29,29,.8)",
            white:"#fff",
            black:"#212529",
            helper:"#8490ff",
            bg:"#f6f8fa",
            footer_bg:"#0a1435",
            btn:"rgb(98 84 243)",
            border:"rgba(98, 84, 243, 0.5)",
            hr:"#ffffff",
            gradiant:"liner-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
            shadow:"rgba(0, 0, 0 ,0.16) 0px 1px 4px",

        },
        media:{
            mobile:"768px",
            tab:"998px",
        },
    };
  return (
    <ThemeProvider theme={theme}>
     <Router>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route path = "/" element = { < Home /> } />
            <Route path = "/about" element = { < About /> } />
            <Route path = "/products" element = { < Products /> } />
            <Route path = "/contact" element = { < Contact /> } />
            <Route path = "/singleproduct/:id" element = { < SingleProduct /> } />
            <Route path = "/cart" element = { < Cart /> } />
            <Route path = "*" element = { < Errorpage /> } />
        </Routes>
        <Footer />
     </Router>
     </ThemeProvider>
  )
}

export default App;