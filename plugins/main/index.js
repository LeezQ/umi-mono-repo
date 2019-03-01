import { join } from 'path';

export default (api, options = {}) => {
  // api.chainWebpackConfig(config => {
  //   config.externals({
  //     react: 'window.React',
  //     'react-dom': 'window.ReactDOM',
  //     dva: 'window.dva',
  //   });
  // });

  api.addHTMLHeadScript(() => {
    const scripts = (options.scripts || []).map(sub => ({ src: sub }));
    return [...scripts];
  });

  api.addHTMLLink(() => (options.stylesheets || []).map(sub => ({ href: sub, rel: 'stylesheet' })));

  api.addRuntimePlugin(join(__dirname, 'app.js'));
};
