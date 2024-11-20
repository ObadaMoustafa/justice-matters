import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './i18n.js';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingContextProvider from './contexts/LoadingContext.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <LoadingContextProvider>
      <App />
    </LoadingContextProvider>
  </Router>
);
