import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

createApp({
  data() {
    return {
      preOperand: null,
      postOperand: null,
      result: null,
    };
  },

  computed: {
    setResult() {
      return this.result;
    },
  },

  methods: {
    getOperation(x) {
      switch (x) {
        case 'sum':
          return (this.result = this.preOperand + this.postOperand);
        case 'subtract':
          return (this.result = this.preOperand - this.postOperand);
        case 'multiply':
          return (this.result = this.preOperand * this.postOperand);
        case 'divide':
          return (this.result = this.preOperand / this.postOperand);

        default:
          alert('Underfined error or you didnt click on redial(circle) button');
          break;
      }
    },
  },
}).mount('#app');
