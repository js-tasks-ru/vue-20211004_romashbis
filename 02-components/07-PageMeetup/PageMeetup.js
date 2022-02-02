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

  data() {
    return {
      meetupById: fetchMeetupById(),
    };
  },

  template: `
    <div class="page-meetup">
    <!--  
    <MeetupView :meetup="meetupById"/>
-->
      <ui-container>
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container>
        <ui-alert>error</ui-alert>
      </ui-container>
    </div>`,
});
