'use client'
import { useState } from 'react'
import Dashboard from './dashboard/Dashboard'
import WelcomePage from './login/WelcomePage'



export default function Home() {

  //login authentication passed as props to child component
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  }
//conditionally rendering the component based on authentication
  return (
    <>
      <div>
        {isAuthenticated ? (
          <Dashboard/>
        ) : (
          <WelcomePage onLogin={handleLogin} />
        )}
      </div>
    </>
  )
}
