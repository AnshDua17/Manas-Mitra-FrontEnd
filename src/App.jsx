import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// Import Pages and Components
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import WellnessLibraryPage from './pages/WellnessLibraryPage';
import CommunityCirclePage from './pages/CommunityCirclePage';
import CounselorConnectPage from './pages/CounselorConnectPage';
import AIChatPage from './pages/AIChatPage';
import MeditationPage from './pages/MeditationPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import DashboardSidebar from './components/layout/DashboardSidebar';

// Reusable UI Components from your original code
const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center z-50">
      <div className="text-center z-10">
        <h2 className="text-3xl font-bold text-white mb-4">Manas Mitra</h2>
        <p className="text-white/80 text-lg">Preparing your wellness journey...</p>
      </div>
    </div>
  );
};

const AnimatedBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse dark:from-blue-800/20"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000 dark:from-teal-800/20"></div>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // --- Dark Mode Logic ---
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark'); // Clear existing classes
    root.classList.add(theme); // Add the current theme class
    localStorage.setItem('theme', theme); // Save the current theme
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  // --- End Dark Mode Logic ---

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleGuestLogin = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const navbarProps = {
    isLoggedIn,
    onLogin: handleGuestLogin,
    theme,
    toggleTheme,
  };

  if (isInitialLoading) {
    return <LoadingScreen isLoading={true} />;
  }
  
  // Your original PageTransition component might cause issues with state updates.
  // We render routes directly for now to ensure the theme toggle works.
  // You can re-introduce the transition component later if needed.
  return (
    <div className="relative min-h-screen bg-off-white dark:bg-gray-900 transition-colors duration-300">
      <AnimatedBackground />
      <Routes location={location} key={location.pathname}>
        {/* Public Routes with Navbar and Footer */}
        <Route path="/" element={<><Navbar {...navbarProps} /><HomePage /><Footer /></>} />
        <Route path="/about" element={<><Navbar {...navbarProps} /><AboutUsPage /><Footer /></>} />
        <Route path="/features" element={<><Navbar {...navbarProps} /><FeaturesPage /><Footer /></>} />
        <Route path="/contact" element={<><Navbar {...navbarProps} /><ContactPage /><Footer /></>} />
        <Route path="/login" element={<><Navbar {...navbarProps} /><LoginPage /></>} />
        <Route path="/signup" element={<><Navbar {...navbarProps} /><SignUpPage /></>} />

        {/* Dashboard Routes with Sidebar */}
        {[ "/dashboard", "/library", "/community", "/connect", "/ai-chat", "/meditation"].map(path => (
          <Route key={path} path={path} element={
            <div className="flex">
              <DashboardSidebar />
              <div className="flex-1 ml-64 p-8">
                {path === "/dashboard" && <DashboardPage />}
                {path === "/library" && <WellnessLibraryPage />}
                {path === "/community" && <CommunityCirclePage />}
                {path === "/connect" && <CounselorConnectPage />}
                {path === "/ai-chat" && <AIChatPage />}
                {path === "/meditation" && <MeditationPage />}
              </div>
            </div>
          }/>
        ))}
      </Routes>
    </div>
  );
}

export default App;