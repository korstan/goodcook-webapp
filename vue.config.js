module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/main.scss";',
      },
    },
  },
  transpileDependencies: ['vuetify'],
};
