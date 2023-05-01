import React from 'react'
import ReactDOM from 'react-dom/client'
import { FusionAuthProvider } from '@fusionauth/react-sdk';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <FusionAuthProvider
            clientID="e9fdb985-9173-4e01-9d73-ac2d60d1dc8e"
            serverUrl="http://localhost:9011"
            redirectUri="http://localhost:5173"
        >
            <App />
        </FusionAuthProvider>

  </React.StrictMode>
)
