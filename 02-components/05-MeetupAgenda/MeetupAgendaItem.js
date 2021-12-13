import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
    },
  },

  data() {
    return {
      data: this.keyValue(),
    };
  },

  methods: {
    keyValue() {
      for (let [key, value] of Object.entries(this.agendaItemIcons)) {
        if (key == this.agendaItem.type) return `/assets/icons/icon-${value}.svg`;
        else agendaItemIcons.other;
      }
    },
  },

  template: `
    <div  class="agenda-item" >
      <div  class="agenda-item__col">
     
        </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ agendaItem.title }}</h3>
        <p v-if="this.agendaItem.speaker" class="agenda-item__talk">
          <span>{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{agendaItem.language}}</span>
        </p>
        <p v-if="this.agendaItem.description">{{agendaItem.description}}</p>
      </div>
    </div>`,
});
