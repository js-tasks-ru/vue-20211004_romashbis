import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

new createApp({
  data() {
    return {
      operand1: null,
      operand2: null,
    };
  },

  methods: {
    getOperands() {
      console.log(this.operand1, this.operand2);
    },
  },
}).mount('#app');
