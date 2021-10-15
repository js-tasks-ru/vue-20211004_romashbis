import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      return (this.count += 1);
    },
  },
}).mount('#app');
