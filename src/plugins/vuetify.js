import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ru from 'vuetify/es5/locale/ru';

Vue.use(Vuetify);

export default new Vuetify({
  theme: { disable: true },
  lang: {
    locales: { ru },
    current: 'ru',
  },
});
