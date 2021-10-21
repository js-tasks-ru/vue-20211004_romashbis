import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
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
    };
  },

  watch: {
    meetUps(oldValue, newValue) {
      if (newValue) return newValue;
      return oldValue;
    },
  },

  methods: {
    dataGet(x) {
      return fetchMeetupById(x).then((data) => (this.meetUps = data));
    },
  },
}).mount('#app');
