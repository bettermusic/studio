module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-praisecharts`
  extends: ["example"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
