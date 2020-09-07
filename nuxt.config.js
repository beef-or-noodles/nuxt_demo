
module.exports = {
  mode: 'universal',
  env: {
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  /*
  ** Global CSS
  */
  css: [
    'assets/main.css',
    'assets/public.less'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/localStorage',ssr:false},
    {src: '~/plugins/axios',ssr:true}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
** Axios module configuration
*/
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    credentials: true,
  },
  proxy: {
    '/api/': {
      target: process.env.BASE_URL, // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
 /* router:{
    /!*每个路由切换都会调用中间件*!/
    middleware:"auth"
  },*/
  /*
  ** Build configuration
  */
  build: {
      // 添加这个是关键，添加后n才会处理依赖包vant里面的代码
      transpile: [ /vant.*?less/ ],

      babel: {
        plugins: [
          ['import', {
            libraryName: 'vant',
            "style": (name) => {
              return `${name}/style/less.js`
            }
          }, 'vant']
        ],
      },
    postcss: {
      // 添加插件名称作为键，参数作为值
      plugins: {
        "postcss-px-to-viewport": {
          unitToConvert: "px", // 默认值`px`，需要转换的单位
          viewportWidth: 375, // 视窗的宽度,对应设计稿宽度
          viewportHeight: 667, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
          unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
          propList: ["*"], // 转化为vw的属性列表
          viewportUnit: "vw", // 指定需要转换成视窗单位
          fontViewportUnit: "vw", // 字体使用的视窗单位
          selectorBlaskList: [".ignore-"], // 指定不需要转换为视窗单位的类
          mediaQuery: false, // 允许在媒体查询中转换`px`
          minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
          replace: true, // 是否直接更换属性值而不添加备用属性
          exclude: [], // 忽略某些文件夹下的文件或特定文件
          landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: "vw", // 横屏时使用的单位
          landscapeWidth: 1134 // 横屏时使用的视窗宽度
        }
      },
      preset: {
        // 更改postcss-preset-env 设置
        autoprefixer: {}
      }
    },
    extend (config, ctx) {
    }
  },
  server:{
    port:8000
  }
}
