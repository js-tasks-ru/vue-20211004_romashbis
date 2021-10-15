import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

createApp({
  data() {
    return {
      preOperand: null,
      operator: null,
      postOperand: null,
    };
  },

  computed: {
    calc() {
      switch (this.operator) {
        case 'sum':
          return this.preOperand + this.postOperand;
        case 'subtract':
          return this.preOperand - this.postOperand;
        case 'multiply':
          return this.preOperand * this.postOperand;
        case 'divide':
          return this.preOperand / this.postOperand;
        default:
          return '';
      }
    },
  },
}).mount('#app');
