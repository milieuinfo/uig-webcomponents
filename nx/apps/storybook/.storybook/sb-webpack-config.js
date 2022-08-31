const Sass = require('sass');
const sbConfig = [
    {
        test: /\.(mjs|tsx?|jsx?)$/,
        use: [
            {
                loader: '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/babel-loader/lib/index.js',
                options: {
                    cacheDirectory:
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/.cache/storybook/babel',
                    sourceType: 'unambiguous',
                    presets: [
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-env/lib/index.js',
                            {
                                shippedProposals: true,
                                loose: true,
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-typescript/lib/index.js',
                    ],
                    plugins: [
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-shorthand-properties/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-block-scoping/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-decorators/lib/index.js',
                            {
                                legacy: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-class-properties/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-private-property-in-object/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-private-methods/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-export-default-from/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js',
                            {
                                loose: true,
                                useBuiltIns: true,
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-classes/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-arrow-functions/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-parameters/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-destructuring/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-spread/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-for-of/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/core-common/node_modules/babel-plugin-macros/dist/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-optional-chaining/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-nullish-coalescing-operator/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/core-common/node_modules/babel-plugin-polyfill-corejs3/lib/index.js',
                            {
                                method: 'usage-global',
                                absoluteImports:
                                    '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/core-js/index.js',
                                version: '3.24.0',
                            },
                        ],
                    ],
                    overrides: [
                        {
                            test: /\.(story|stories).*$/,
                            plugins: [
                                '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/babel-plugin-named-exports-order/index.js',
                            ],
                        },
                    ],
                },
            },
        ],
        include: ['/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents'],
        exclude: '/node_modules/',
    },
    {
        test: /\.js$/,
        use: [
            {
                loader: '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/babel-loader/lib/index.js',
                options: {
                    sourceType: 'unambiguous',
                    presets: [
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-env/lib/index.js',
                            {
                                shippedProposals: true,
                                modules: false,
                                loose: true,
                                targets: 'defaults',
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-react/lib/index.js',
                    ],
                    plugins: [
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-shorthand-properties/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-block-scoping/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-decorators/lib/index.js',
                            {
                                legacy: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-class-properties/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-private-property-in-object/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-private-methods/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-export-default-from/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js',
                            {
                                loose: true,
                                useBuiltIns: true,
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-classes/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-arrow-functions/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-parameters/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-destructuring/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-spread/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-for-of/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/core-common/node_modules/babel-plugin-macros/dist/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-optional-chaining/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-nullish-coalescing-operator/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/core-common/node_modules/babel-plugin-polyfill-corejs3/lib/index.js',
                            {
                                method: 'usage-global',
                                absoluteImports:
                                    '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/core-js/index.js',
                                version: '3.24.0',
                            },
                        ],
                    ],
                },
            },
        ],
    },
    {
        test: /\.md$/,
        type: 'asset/source',
    },
    {
        test: [
            /src(.*)\.js$/,
            /packages(\/|\\)*(\/|\\)src(\/|\\)(.*)\.js$/,
            /node_modules(\/|\\)lit-html(.*)\.js$/,
            /node_modules(\/|\\)lit-element(.*)\.js$/,
            /node_modules(\/|\\)@open-wc(.*)\.js$/,
            /node_modules(\/|\\)@polymer(.*)\.js$/,
            /node_modules(\/|\\)@vaadin(.*)\.js$/,
        ],
        use: {
            loader: '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/babel-loader/lib/index.js',
            options: {
                plugins: [
                    '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js',
                    '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-syntax-import-meta/lib/index.js',
                    [
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/babel-plugin-bundled-import-meta/index.js',
                        {
                            importStyle: 'baseURI',
                        },
                    ],
                ],
                presets: [
                    [
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-env/lib/index.js',
                        {
                            useBuiltIns: 'entry',
                            corejs: 3,
                        },
                    ],
                ],
                babelrc: false,
            },
        },
    },
    {
        test: /\.js$/,
        include: '/node_modules\\/acorn-jsx/',
        use: [
            {
                loader: '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/babel-loader/lib/index.js',
                options: {
                    presets: [
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-env/lib/index.js',
                            {
                                modules: 'commonjs',
                            },
                        ],
                    ],
                },
            },
        ],
    },
    {
        test: /(stories|story)\.mdx$/,
        use: [
            {
                loader: '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/babel-loader/lib/index.js',
                options: {
                    babelrc: false,
                    configFile: false,
                    cacheDirectory:
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/.cache/storybook/babel',
                    sourceType: 'unambiguous',
                    presets: [
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-env/lib/index.js',
                            {
                                shippedProposals: true,
                                loose: true,
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-typescript/lib/index.js',
                    ],
                    plugins: [
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-shorthand-properties/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-block-scoping/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-decorators/lib/index.js',
                            {
                                legacy: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-class-properties/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-private-property-in-object/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-private-methods/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-export-default-from/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js',
                            {
                                loose: true,
                                useBuiltIns: true,
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-classes/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-arrow-functions/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-parameters/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-destructuring/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-spread/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-for-of/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/core-common/node_modules/babel-plugin-macros/dist/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-optional-chaining/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-nullish-coalescing-operator/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/core-common/node_modules/babel-plugin-polyfill-corejs3/lib/index.js',
                            {
                                method: 'usage-global',
                                absoluteImports:
                                    '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/core-js/index.js',
                                version: '3.24.0',
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-react-jsx/lib/index.js',
                            {
                                pragma: 'React.createElement',
                                pragmaFrag: 'React.Fragment',
                            },
                        ],
                    ],
                    overrides: [
                        {
                            test: /\.(story|stories).*$/,
                            plugins: [
                                '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/babel-plugin-named-exports-order/index.js',
                            ],
                        },
                    ],
                },
            },
            {
                loader: '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/mdx1-csf/loader.js',
            },
        ],
    },
    {
        test: /\.mdx$/,
        exclude: '/(stories|story)\\.mdx$/',
        use: [
            {
                loader: '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/babel-loader/lib/index.js',
                options: {
                    babelrc: false,
                    configFile: false,
                    cacheDirectory:
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/.cache/storybook/babel',
                    sourceType: 'unambiguous',
                    presets: [
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-env/lib/index.js',
                            {
                                shippedProposals: true,
                                loose: true,
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/preset-typescript/lib/index.js',
                    ],
                    plugins: [
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-shorthand-properties/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-block-scoping/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-decorators/lib/index.js',
                            {
                                legacy: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-class-properties/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-private-property-in-object/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-private-methods/lib/index.js',
                            {
                                loose: true,
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-export-default-from/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js',
                            {
                                loose: true,
                                useBuiltIns: true,
                            },
                        ],
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-classes/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-arrow-functions/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-parameters/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-destructuring/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-spread/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-for-of/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/core-common/node_modules/babel-plugin-macros/dist/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-optional-chaining/lib/index.js',
                        '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-proposal-nullish-coalescing-operator/lib/index.js',
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/core-common/node_modules/babel-plugin-polyfill-corejs3/lib/index.js',
                            {
                                method: 'usage-global',
                                absoluteImports:
                                    '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/core-js/index.js',
                                version: '3.24.0',
                            },
                        ],
                        [
                            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@babel/plugin-transform-react-jsx/lib/index.js',
                            {
                                pragma: 'React.createElement',
                                pragmaFrag: 'React.Fragment',
                            },
                        ],
                    ],
                    overrides: [
                        {
                            test: /\.(story|stories).*$/,
                            plugins: [
                                '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/babel-plugin-named-exports-order/index.js',
                            ],
                        },
                    ],
                },
            },
            {
                loader: '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/mdx1-csf/loader.js',
                options: {
                    skipCsf: true,
                    remarkPlugins: [null, null],
                },
            },
        ],
    },
    {
        test: /\.(stories|story)\.[tj]sx?$/,
        loader: '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/source-loader/dist/cjs/index.js',
        options: {
            injectStoryParameters: true,
            inspectLocalDependencies: true,
        },
        enforce: 'pre',
    },
    {
        test: /\.css$/,
        sideEffects: true,
        use: [
            '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/cjs.js',
            {
                loader: '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-webcomponents/nx/node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js',
                options: {
                    importLoaders: 1,
                },
            },
        ],
    },
    {
        test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
            filename: 'static/media/[path][name][ext]',
        },
    },
    {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        type: 'asset',
        parser: {
            dataUrlCondition: {
                maxSize: 10000,
            },
        },
        generator: {
            filename: 'static/media/[path][name][ext]',
        },
    },
    {
        test: /\.scss$/,
        exclude: '/\\/libs\\/components\\/src\\/lib/',
        use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
        test: /\.scss$/,
        loader: 'lit-css-loader',
        include: '/\\/libs\\/components\\/src\\/lib/',
        options: {
            specifier: 'lit',
            transform: (data, { filePath }) => {
                // console.log('lit-css-loader - before', filePath, data);
                // renderSync is deprecated en zou compile moeten worden, maar dat geeft een fout
                const result = Sass.renderSync({
                    data,
                    file: filePath,
                    includePaths: ['./node_modules'],
                }).css.toString();
                // console.log('lit-css-loader - after', result);
                return result;
            },
        },
    },
];
