import pageRoutes from './router.config';

export default {
  history: 'hash',
  // add for transfer to umi
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
          immer: true,
        },
        targets: {
          ie: 11,
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
      },
    ],
    ['./plugins/sub'],
  ],
  hash: false,
  targets: {
    ie: 11,
  },
  proxy: {
  },
  // 路由配置
  routes: pageRoutes,
  externals: {
    // react: 'window.React',
    // 'react-dom': 'window.ReactDOM',
    // dva: 'window.dva',
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssnano: {
    mergeRules: false,
  },
};
