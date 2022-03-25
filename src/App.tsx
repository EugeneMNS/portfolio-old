import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {RemoveWork} from "./components/RemoveWork/RemoveWork";


function App() {
  return (
    <div className="App">
        <Header/>
        <Main />
        <Skills />
        <Projects/>
        <RemoveWork/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
