import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  console.log('func fetchMeetups', meetupId);
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
      meetup: null,
    };
  },

  watch: {
    meetup(x) {
      fetchMeetupById(x).then((data) => (this.meetup = data));
    },
  },
}).mount('#app');
