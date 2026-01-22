import { useState } from 'react'
import { featureFlags } from '../config/featureFlags'

export default function DarkModeToggle({ onToggle }) {
  const [isDark, setIsDark] = useState(false)

  // This feature is only visible if the dark mode flag is enabled
  if (!featureFlags.darkMode) {
    return null
  }

  const handleToggle = () => {
    const newMode = !isDark
    setIsDark(newMode)
    onToggle(newMode)
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <button
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          borderRadius: '20px',
          border: 'none',
          background: isDark ? '#333' : '#f0f0f0',
          color: isDark ? '#fff' : '#333',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'all 0.3s ease',
        }}
      >
        {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  )
}
