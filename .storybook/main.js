const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    {
      // Storybook で PostCSS 8 を使用する
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (baseConfig) => {
    // @see https://zenn.dev/nus3/articles/257d724e24a39b756b5a
    // デフォルトではcss modulesは読み込まれないので読み込まれるように設定する
    const cssRule = baseConfig.module.rules.find(
      (rule) => String(rule.test).indexOf("css") !== -1
    );
    if (!cssRule) return { ...baseConfig };

    // 対象から.module.cssファイルを外す
    cssRule.test = /^.*(?<!\.module)\.css$/;
    const cssLoader = cssRule.use.find(
      (u) => String(u.loader).indexOf("css-loader") !== -1
    );
    if (cssLoader) {
      cssLoader.options = {
        importLoaders: 1,
      };
    }

    // postcss-loaderはaddon-postcssのものをそのまま使う
    const postcssLoader = cssRule.use.find(
      (u) => String(u.loader).indexOf("postcss-loader") !== -1
    );

    if (postcssLoader) {
      baseConfig.module.rules.push({
        // .module.cssファイルのみが対象
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              // css modulesを有効にする
              modules: true,
            },
          },
          postcssLoader,
        ],
      });
    }

    return { ...baseConfig };
  },
};
