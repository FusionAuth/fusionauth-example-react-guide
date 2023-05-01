import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  FusionAuthLoginButton,
  FusionAuthLogoutButton,
  RequireAuth,
  useFusionAuth
} from '@fusionauth/react-sdk';

function App() {
  const { isAuthenticated, user } = useFusionAuth();

  return (
    <>
      <h1>Vite + React + FusionAuth</h1>
      <div className="card">
        <p>
          {isAuthenticated ? <FusionAuthLogoutButton />:<FusionAuthLoginButton />}
          <RequireAuth>
          Welcome {user.name}
          </RequireAuth>
        </p>
      </div>
    </>
  )
}

export default App
