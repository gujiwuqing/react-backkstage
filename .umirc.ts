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
  webpack5: {},
  dynamicImport: {},
  mfsu: {},
  fastRefresh: {},
  mock: {},
});
