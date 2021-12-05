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

  data() {
    return { imageProp: this.image ? '--bg-url: url(' + this.image + ')' : '' };
  },

  template: `
    <div class="meetup-cover" :style="imageProp">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
