import { featureFlags } from '../config/featureFlags'

export default function FeatureFlagStatus() {
  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      fontFamily: 'monospace',
      minWidth: '200px'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px', borderBottom: '1px solid #444', paddingBottom: '5px' }}>
        🚩 Feature Flags
      </div>
      {Object.entries(featureFlags).map(([key, value]) => (
        <div key={key} style={{ margin: '5px 0' }}>
          <span style={{ color: value ? '#0f0' : '#f00' }}>
            {value ? '✓' : '✗'}
          </span>
          {' '}
          {key}: {value ? 'ON' : 'OFF'}
        </div>
      ))}
      <div style={{ marginTop: '10px', fontSize: '10px', color: '#888', borderTop: '1px solid #444', paddingTop: '5px' }}>
        Edit .env to toggle flags
      </div>
    </div>
  )
}
