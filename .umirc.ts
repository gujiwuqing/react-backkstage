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

  /**
   路由要改成 hash路由，不然打开页面也是空白的。
   在发布到gitee之前，可以先用 ./ 打包，在本地试试，
   看看打开index.html有没有效果
   */
  history: { type: 'hash' },
  routes,
  devServer: {
    port: 8009,
  },
  fastRefresh: {},
  mock: {},
});
