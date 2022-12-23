exports.onRouteUpdate = function () {
  // Don't track while developing.
  if (process.env.NODE_ENV === `production` && typeof fbq === `function` && !pluginOptions.disableViewContent) {
    fbq("track", "ViewContent");
  }
};
