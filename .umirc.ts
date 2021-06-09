import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  base: '/react-backstage/',
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath:
    process.env.NODE_ENV === 'development'
      ? './'
      : 'https://gujiwuqing.github.io/react-backstage/',
  history: { type: 'hash' },
  routes,
  devServer: {
    port: 8009,
  },
  fastRefresh: {},
  mock: {},
  extraBabelPlugins: [
    ['transform-remove-console', { exclude: ['error', 'warn'] }],
  ],
});
