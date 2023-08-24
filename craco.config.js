const CracoAlias = require("craco-alias");
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        jsConfigPath: "jsconfig.paths.json",
        // 별칭 설정을 여기에 추가합니다.
        // aliases: {
        //   "@components": "./src/components",
        //   "@utils": "./src/utils",
        // },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          // Less 옵션을 설정합니다.
        },
      },
    },
  ],
};
