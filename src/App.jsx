import React from 'react';
import BottomNavbar from "./components/BottomNavbar";
import bottomNavbarStyles from "./components/BottomNavbar.module.css";
import TopNavbar from "./components/TopNavbar";
import topNavbarStyles from "./components/TopNavbar.module.css";
import Home from "./pages/Home";
import Read from "./pages/Read";
import Write from "./pages/Write";
import Profile from "./pages/Profile";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <TopNavbar />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read" element={<Read />} />
          <Route path="/write" element={<Write />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <BottomNavbar />
    </div>
  );
}

export default App;
