import { defineConfig } from 'umi';
import routes from './config/routes';
import defaultSettings from './src/defaultSettings';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  devServer: {
    port: 8009,
  },
  // theme: {
  //   '@primary-color': '#00a74b',
  // },
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
});
