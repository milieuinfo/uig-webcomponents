module.exports = {
  stories: ['../src/**/(components|pages|legacy)/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    const newConfig = {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.scss$/,
            loader: 'string-replace-loader',
            options: {
              multiple: [
                {
                  search: new RegExp(/(?:\/font\/flanders\/italic\/FlandersArtSans)/gm),
                  replace: 'https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic',
                },
                {
                  search: new RegExp(/(?:\/font\/flanders\/sans\/FlandersArtSans)/gm),
                  replace: 'https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans',
                },
                {
                  search: new RegExp(/(?:\/font\/flanders\/serif\/FlandersArtSerif)/gm),
                  replace: 'https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif',
                },
                {
                  search: new RegExp(/(?:\/font\/iconfont\/vlaanderen-icon.woff)/gm),
                  replace:
                    'https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/iconfont/3.12.23/vlaanderen-icon.woff',
                },
              ],
            },
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
              'sass-to-string',
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    outputStyle: 'compressed',
                  },
                },
              },
            ],
          },
        ],
      },
    };
    return newConfig;
  },
};
