import { defineConfig } from 'umi';
import routes from './config/routes';
import path from 'path';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  devServer: {
    port: 8009,
  },

  // plugins: ['@alitajs/plugin-theme'],
  // dynamicTheme: {
  //   type: 'antd',
  //   themeVariables: ['@layout-body-background'],
  // },
});
