import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Header from './components/pages/Header';
import ProgressChecker from './components/pages/ProgressChecker';
import ProjectGoals from './components/pages/ProjectGoals';
import ProjectManager from './components/pages/ProjectManager';
import AccountSettings from './components/pages/AccountSettings';
import Profile from './components/pages/Profile';
import Notifications from './components/pages/Notifications';
import Welcome from './components/pages/Welcome';
import './App.css';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
  };

  return (
    <div className="app-container">
      {isSplashVisible ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/dashboard" element={<ProgressChecker />} /> {/* Assuming ProgressChecker is your main dashboard */}
              <Route path="/tasks" element={<ProjectGoals />} />
              <Route path="/projects" element={<ProjectManager />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<AccountSettings />} />
              <Route path="/progress" element={<ProgressChecker />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  );
}

export default App;