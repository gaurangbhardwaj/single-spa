const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "GB",
    projectName: "shell-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // Example: Adding custom alias or plugins if needed
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
      },
    },
  });
};
