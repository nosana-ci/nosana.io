<template>
  <div>
    <div class="">
      <h4 class="subtitle has-text-accent" data-aos="fade-up">
        <span class="has-text-weight-bold">Calendar</span>
        <span style="padding-left:100px">
          day: <span
            v-if="prizes"
            class="has-text-weight-bold"
          >{{ (prizes.filter(p => p.prize)).length }}</span><span class="has-text-weight-bold">/10</span></span>
      </h4>
      <h2 class="title" data-aos="fade-up">
        The Burner Phones<br>Festival
      </h2>
      <h4 class="mt-6 mb-4 subtitle has-text-accent has-text-centered has-text-weight-bold mb-3" data-aos="fade-up">
        October 30 – November 12
      </h4>
    </div>
    <div class="table-container">
      <table class="table is-bordered">
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="week in 2" :key="week">
            <td
              v-for="prize in prizes.slice((week-1) * 7,week * 7)"
              :key="prize.day"
              :data-tooltip="
                prize.info ? prize.info : null"
              :class="{'is-active': currentDay === prize.day,
                       'is-selected': currentDay !== prize.day
                         && prizes && (prizes.find(p => p.day === prize.day)).prize}"
            >
              <span>{{ prize.day }}</span>
              <div style="max-height: 120px; overflow-y: hidden" class="has-text-centered">
                <img
                  v-if="prize.prize"
                  width="110"
                  :src="require(`@/assets/img/festival/${prize.prize}.png`)"
                >
                <img
                  v-else
                  width="140"
                  :src="require(`@/assets/img/festival/lootbox-${prize.type}.png`)"
                >
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      prizes: [],
      currentDay: null
    };
  },
  mounted () {
    this.getFestivalCalendar();
  },
  methods: {
    async getFestivalCalendar () {
      try {
        const response = await fetch('http://localhost:4123/festival-calendar');
        const data = await response.json();
        this.prizes = data.prizes;
        this.currentDay = data.currentDay;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
th {
  border: none;
}
td {
  border-color: #303930 !important;
  min-width: 156px;
  height: 130px;
  border-color: $grey;
  background-color: $box-background-color !important;
  cursor: default !important;
  &:before {
    margin-top: 40px !important;
  }
}
td.is-active {
  border-color: $accent;
  border-width: 2px;
}
table {
  border-collapse: separate;
  tr:first-child td:first-child {
      border-top-left-radius: 10px;
  }
  tr:first-child td:last-child {
      border-top-right-radius: 10px;
  }
  tr:last-child td:first-child {
      border-bottom-left-radius: 10px;
  }
  tr:last-child td:last-child {
      border-bottom-right-radius: 10px;
  }
}
</style>
