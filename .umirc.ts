import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  base: '/react-backstage',
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  devServer: {
    port: 8009,
  },
  fastRefresh: {},
  mock: {},
});
