import { useEffect } from 'react'
import { featureFlags } from '../config/featureFlags'

export default function AnalyticsTracker() {
  useEffect(() => {
    if (featureFlags.analytics) {
      console.log('📊 Analytics: Page viewed at', new Date().toLocaleTimeString())
      
      // In a real app, you'd send this to an analytics service
      // trackPageView({ page: 'dashboard', timestamp: Date.now() })
    }
  }, [])

  // This component doesn't render anything - it just tracks analytics
  if (!featureFlags.analytics) {
    return null
  }

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '10px', 
      right: '10px', 
      background: '#333', 
      color: '#0f0',
      padding: '10px 15px',
      borderRadius: '4px',
      fontSize: '12px',
      fontFamily: 'monospace'
    }}>
      📊 Analytics Active
    </div>
  )
}
