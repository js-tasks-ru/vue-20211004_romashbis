import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      default: null,
    },
    place: {
      type: String,
      default: null,
    },
    date: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    convertedDate() {
      let newDate = new Date(this.date);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return newDate.toLocaleDateString(navigator.language, options); // <-- у меня локаль Английская, поэтому захардкодил на русскую
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="convertedDate"> {{ convertedDate }} </time>
      </li>
    </ul>`,
});
