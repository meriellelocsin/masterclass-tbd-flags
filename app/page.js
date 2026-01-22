'use client'

import { useState } from 'react'
import Dashboard from '../src/components/Dashboard'
import AnalyticsTracker from '../src/components/AnalyticsTracker'

export default function Home() {
  //const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      color: '#000000',
      transition: 'all 0.3s ease',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1>🚀 Trunk-Based Development + Feature Flags Demo</h1>
          <p style={{ opacity: 0.7 }}>
            All features are deployed to main, controlled by environment variables
          </p>
          <Dashboard />
        </header>
      </div>
    </div>
  )
}
