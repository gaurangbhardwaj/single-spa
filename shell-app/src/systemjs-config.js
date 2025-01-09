import SystemJS from 'systemjs';

// systemjs-config.js or in the entry file of your shell app
SystemJS.config({
    paths: {
      'react-app': 'http://localhost:3001/react-app.js',  // Path to the React app's bundle
      'vue-app': 'http://localhost:3002/vue-app.js',      // Path to the Vue app's bundle
    },
    map: {
      '@react/react-app': 'react-app', // Alias for React app
      '@vue/vue-app': 'vue-app',       // Alias for Vue app
    },
});
  