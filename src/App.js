import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Read from "./pages/Read";
import Navbar from "./pages/Navbar";
import Achievment from "./pages/Achievment";
import Project from "./pages/Project";
import {  
  Route,
  Routes,
} from "react-router-dom";


export default function App() {
  return (
    <>
    <React.Fragment>  <Navbar/></React.Fragment>
    
      
      <Routes >
        <Route path="/" element={<Home/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route> 
        <Route path="/achievment" element={<Achievment/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/create-notes" element={<Create/>}></Route>
        <Route path="/update-notes" element={<Update/>}></Route>
        <Route path="/read-notes" element={<Read/>}></Route>
      </Routes>
   </>
  );
          }
