import React from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
