module.exports = {
  "stories": [
    "../../../packages/studio/src/**/*.stories.{ts,tsx}",
    // "../stories/**/*.stories.mdx", 
    // "../*.stories.@(js|jsx|ts|tsx)", 
    // "../../**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  "framework": "@storybook/html"
}