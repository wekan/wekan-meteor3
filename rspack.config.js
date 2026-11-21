const { defineConfig } = require('@meteorjs/rspack');

/**
 * Rspack configuration for Meteor projects.
 *
 * Provides typed flags on the `Meteor` object, such as:
 * - `Meteor.isClient` / `Meteor.isServer`
 * - `Meteor.isDevelopment` / `Meteor.isProduction`
 * - …and other flags available
 *
 * Use these flags to adjust your build settings based on environment.
 */
module.exports = defineConfig(Meteor => ({
  // @wekanteam/meteor-globals (used by @wekanteam/meteor-reactive-cache) has a
  // server-only findDotMeteorDir() that requires 'path' next to 'fs'. Meteor's
  // Rspack config already maps 'fs' to false for the browser; map 'path' the
  // same way, because the client never calls that function.
  ...(Meteor.isClient && {
    resolve: {
      fallback: {
        path: false,
      },
    },
  }),
}));
