import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
createApp({
  data() {
    return {
      meetUps: null,
      radioCheck: null,
    };
  },

  created() {
    this.getData();
  },

  methods: {
    getData() {
      fetchMeetupById().then((data) => {
        return (this.meetUps = data);
      });
    },
    inputChecked(x) {
      console.log(x);
    },
  },
}).mount('#app');
