import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes';
import ErrorBoundary from './components/error-boundary';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ErrorBoundary>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <ScrollToTop />
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </LanguageProvider>
  );
}

export default App;