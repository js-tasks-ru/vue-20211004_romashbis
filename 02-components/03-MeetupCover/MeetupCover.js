import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
      default: 'Empty value',
    },
    image: {
      type: String,
      default: null,
    },
  },

  template: `
    <div class="meetup-cover" :style=" image ? '--bg-url: url(' + image + ')' : false ">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
