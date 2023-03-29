const {
  shareAll,
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    // Check this line. Is port 4201 configured?
    // mfe1: 'http://localhost:4201/remoteEntry.js',
  },

  // shared: {
  //   ...shareAll({
  //     singleton: true,
  //     strictVersion: true,
  //     requiredVersion: 'auto',
  //   }),
  // },
  // shared: share({
    
  //   // Add this:
  //   "@auth0/auth0-angular": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  
  //   ...sharedMappings.getDescriptors()
  // })
  shared: {
    ...share({
      "@auth0/auth0-angular": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    })
  }
});