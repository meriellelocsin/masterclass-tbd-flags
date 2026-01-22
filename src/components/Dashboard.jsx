import { featureFlags } from '../config/featureFlags'

/*function DashboardOld() {
  return (
    <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
      <h2>📊 Dashboard (Old Version)</h2>
      <p>This is the old dashboard design.</p>
      <div style={{ marginTop: '20px' }}>
        <div style={{ padding: '15px', background: 'white', marginBottom: '10px', borderRadius: '4px' }}>
          <strong>Users:</strong> 1,234
        </div>
        <div style={{ padding: '15px', background: 'white', marginBottom: '10px', borderRadius: '4px' }}>
          <strong>Revenue:</strong> $45,678
        </div>
        <div style={{ padding: '15px', background: 'white', borderRadius: '4px' }}>
          <strong>Active Sessions:</strong> 89
        </div>
      </div>
    </div>
  )
}

function DashboardNew() {
  return (
    <div style={{ 
      padding: '20px', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '12px',
      color: 'white'
    }}>
      <h2>✨ Dashboard (New Version)</h2>
      <p>This is the new, improved dashboard with better UI!</p>
      <div style={{ marginTop: '20px', display: 'grid', gap: '15px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div style={{ padding: '20px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold' }}>1,234</div>
          <div style={{ opacity: 0.9 }}>Users</div>
        </div>
        <div style={{ padding: '20px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold' }}>$45,678</div>
          <div style={{ opacity: 0.9 }}>Revenue</div>
        </div>
        <div style={{ padding: '20px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold' }}>89</div>
          <div style={{ opacity: 0.9 }}>Active Sessions</div>
        </div>
      </div>
    </div>
  )
}*/

export default function Dashboard() {
  // Feature flag determines which version to show
  return (
    <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
      <h2>📊 Dashboard</h2>
      <p>This is the old dashboard design.</p>
      <div style={{ marginTop: '20px' }}>
        <div style={{ padding: '15px', background: 'white', marginBottom: '10px', borderRadius: '4px' }}>
          <strong>Users:</strong> 1,234
        </div>
        <div style={{ padding: '15px', background: 'white', marginBottom: '10px', borderRadius: '4px' }}>
          <strong>Revenue:</strong> $45,678
        </div>
        <div style={{ padding: '15px', background: 'white', borderRadius: '4px' }}>
          <strong>Active Sessions:</strong> 89
        </div>
      </div>
    </div>
  )
}
