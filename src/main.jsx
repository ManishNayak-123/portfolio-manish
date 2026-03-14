// @import "tailwindcss";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import store from './Redux/store.js';
import {Provider} from 'react-redux';
import App from './App.jsx'
import { store } from './practice react js/Redux toolKit in react/Redux.jsx';

// import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter , Route, Routes } from 'react-router'
import Home from '../new project for portfolio/Home.jsx';
import About from '../new project for portfolio/About.jsx';
createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <StrictMode>

  <Provider store={store}>
    <App />
    <Routes>
   
    
    
    
    </Routes>
  </Provider>
  {/* <GoogleOAuthProvider clientId = "852903178128-h5gsqq1kkhcsjdqvu6bin2gj84s2m78v.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider> */}
  </StrictMode>
  </BrowserRouter>
  ,
)
