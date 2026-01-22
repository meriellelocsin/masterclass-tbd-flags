/**
 * Feature Flags Configuration
 * 
 * All feature flags are controlled via environment variables.
 * This allows us to:
 * - Deploy code to production but keep features hidden
 * - Test in production safely
 * - Enable gradual rollouts
 * - Quickly disable problematic features
 */

/*
export const featureFlags = {
  //newDashboard: process.env.NEXT_PUBLIC_FEATURE_NEW_DASHBOARD === 'true',
  darkMode: process.env.NEXT_PUBLIC_FEATURE_DARK_MODE === 'true',
  analytics: process.env.NEXT_PUBLIC_FEATURE_ANALYTICS === 'true',
}

// Helper function to check if a feature is enabled
export const isFeatureEnabled = (featureName) => {
  return featureFlags[featureName] || false
}

// Log current feature flags (helpful for debugging)
console.log('🚩 Feature Flags:', featureFlags)
*/
