import React from 'react';
import BottomNavbar from "./components/BottomNavbar";
import TopNavbar from "./components/TopNavbar";
import Home from "./pages/Home";
import Read from "./pages/Read";
import Write from "./pages/Write";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from './pages/theme-context';
import styles from "./App.module.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className={styles.app}>
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
    </ThemeProvider>
  );
}

export default App;
