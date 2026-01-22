import { useState } from 'react'
import Dashboard from './components/Dashboard'
import DarkModeToggle from './components/DarkModeToggle'
import AnalyticsTracker from './components/AnalyticsTracker'
import FeatureFlagStatus from './components/FeatureFlagStatus'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div style={{
      minHeight: '100vh',
      background: isDarkMode ? '#1a1a1a' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
      transition: 'all 0.3s ease',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1>🚀 Trunk-Based Development + Feature Flags Demo</h1>
          <p style={{ opacity: 0.7 }}>
            All features are deployed to main, controlled by environment variables
          </p>
        </header>

        <DarkModeToggle onToggle={setIsDarkMode} />
        
        <Dashboard />

        <AnalyticsTracker />
        <FeatureFlagStatus />
      </div>
    </div>
  )
}

export default App
