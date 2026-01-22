# Trunk-Based Development + Feature Flags Demo

A live demo showcasing how to implement trunk-based development with feature flags in React.

## 🎯 What You'll Learn

### Trunk-Based Development (TBD)
- All developers commit to a single branch (main/trunk)
- No long-lived feature branches
- Code is always deployable
- Features are hidden behind flags

### Feature Flags
- Deploy code without exposing features
- Toggle features on/off without redeployment
- Test in production safely
- Quick rollback by flipping a flag

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the app:**
   ```bash
   npm run dev
   ```

3. **Toggle features:**
   Edit the `.env` file to turn features on/off:
   ```env
   VITE_FEATURE_NEW_DASHBOARD=true
   VITE_FEATURE_DARK_MODE=true
   VITE_FEATURE_ANALYTICS=false
   ```

4. **Restart the dev server** after changing `.env` to see changes.

## 🚩 Available Feature Flags

| Flag | Description | Default |
|------|-------------|---------|
| `VITE_FEATURE_NEW_DASHBOARD` | Show new dashboard UI | `true` |
| `VITE_FEATURE_DARK_MODE` | Enable dark mode toggle | `true` |
| `VITE_FEATURE_ANALYTICS` | Enable analytics tracking | `false` |

## 🎓 Teaching Points

### 1. **Continuous Integration**
- All code merges to `main` immediately
- Small, incremental commits
- Fast feedback loop

### 2. **Feature Flag Benefits**
- **Decouple deployment from release**: Deploy anytime, release when ready
- **A/B testing**: Show different versions to different users
- **Kill switches**: Disable features instantly if issues arise
- **Gradual rollouts**: Enable for 10% of users, then 50%, then 100%

### 3. **Real-World Usage**
```javascript
// Simple feature check
if (featureFlags.newDashboard) {
  return <NewDashboard />
} else {
  return <OldDashboard />
}
```

### 4. **Best Practices**
- ✅ Keep flags temporary - remove old code once feature is stable
- ✅ Use meaningful flag names
- ✅ Document what each flag does
- ✅ Test both states (on/off) of each flag
- ⚠️ Don't let flags accumulate - they add complexity

## 🔄 TBD Workflow Example

1. **Developer starts work on new dashboard:**
   ```bash
   # Set flag to false in .env
   VITE_FEATURE_NEW_DASHBOARD=false
   
   # Code new dashboard
   # Commit directly to main
   git add .
   git commit -m "Add new dashboard (behind feature flag)"
   git push origin main
   ```

2. **Deploy to production:**
   ```bash
   # Feature is deployed but hidden (flag is false)
   npm run build
   # Deploy...
   ```

3. **Test in production:**
   ```bash
   # Enable for testing
   VITE_FEATURE_NEW_DASHBOARD=true
   ```

4. **Release to users:**
   ```bash
   # Flip flag in production environment
   # No code deployment needed!
   ```

5. **If issues occur:**
   ```bash
   # Instantly disable
   VITE_FEATURE_NEW_DASHBOARD=false
   ```

## 📚 Further Reading

- [Trunk-Based Development](https://trunkbaseddevelopment.com/)
- [Feature Flags Best Practices](https://launchdarkly.com/blog/feature-flag-best-practices/)
- [Martin Fowler - Feature Toggles](https://martinfowler.com/articles/feature-toggles.html)

## 🛠️ Project Structure

```
src/
├── config/
│   └── featureFlags.js      # Central flag configuration
├── components/
│   ├── Dashboard.jsx        # Old vs New dashboard
│   ├── DarkModeToggle.jsx   # Feature behind flag
│   ├── AnalyticsTracker.jsx # Feature behind flag
│   └── FeatureFlagStatus.jsx # Debug panel
├── App.jsx                  # Main app
└── main.jsx                 # Entry point
```

## 💡 Live Demo Tips

1. Start with all flags OFF - show basic app
2. Enable `VITE_FEATURE_DARK_MODE` - show new feature appearing
3. Enable `VITE_FEATURE_NEW_DASHBOARD` - show UI change
4. Enable `VITE_FEATURE_ANALYTICS` - show tracking
5. Disable dashboard flag - show instant rollback

## ⚡ Key Takeaways

- Feature flags enable trunk-based development
- Deploy frequently, release carefully
- No more long-lived feature branches
- Faster feedback, less merge conflicts
- Built-in kill switch for problematic features
