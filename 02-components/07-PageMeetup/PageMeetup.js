import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      isLoading: false,
      isError: false,
    };
  },

  watch: {
    meetupId(newId) {
      this.getData(newId);
    },
  },

  created() {
    this.getData(this.meetupId);
  },

  methods: {
    getData(id) {
      this.isLoading = true;
      this.isError = false;
      fetchMeetupById(id)
        .then((data) => {
          this.isLoading = false;
          this.meetup = data;
        })
        .catch(() => {
          this.isLoading = false;
          this.isError = true;
        });
    },
  },

  template: `
    <div class="page-meetup">

      <template v-if="isLoading">
        <ui-container >
          <ui-alert>Загрузка...</ui-alert>
        </ui-container>
      </template>

      <template v-else-if="isError">
        <ui-container>
          <ui-alert>Test Error</ui-alert>
        </ui-container>
      </template>

      <template v-else>
          <MeetupView :meetup="meetup"/>
      </template>

      


      
    </div>`,
});
