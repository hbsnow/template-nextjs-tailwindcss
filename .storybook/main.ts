import type { StorybookConfig } from "@storybook/core-common";

const config: StorybookConfig = {
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
  ],
  core: {
    builder: "webpack5",
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
};

export default config;
