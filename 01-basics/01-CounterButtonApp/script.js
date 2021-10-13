import { createApp } from './vendor/vue.esm-browser.js';

export default createApp({
  data() {
    return {
      count: 0,
    };
  },

  computed: {
    getCount() {
      return this.count;
    },
  },

  methods: {
    setCountAdd() {
      return this.count++;
    },
  },
}).$mount('#app');
