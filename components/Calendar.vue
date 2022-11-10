<template>
  <div :class="{'columns': winners}">
    <div :class="{'column is-10': winners}">
      <div class="">
        <h4 class="subtitle has-text-accent is-family-sans-serif" data-aos="fade-up">
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
        <h4
          class="mt-6 mb-4 subtitle is-family-sans-serif has-text-accent
          has-text-centered has-text-weight-bold"
          data-aos="fade-up"
        >
          November 7 – November 16
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
                v-for="prize in prizes.slice((week-1) * 7, week * 7)"
                :key="prize.day"
                :data-tooltip="
                  prize.info ? prize.info : null"
                :class="{'is-active': currentDay === prize.day,
                         'is-selected': currentDay !== prize.day
                           && prizes && (prizes.find(p => p.day === prize.day)).prize}"
              >
                <span>{{ prize.day }}</span>
                <i v-if="prize.prize" class="fa-solid fa-circle-check is-pulled-right has-text-accent" />
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
              <template v-if="week === 2">
                <td v-for="i in 4" :key="i" class="has-background-black">
                  <span>{{ 16 + i }}</span>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="prizes.filter(p => p.winner && p.winner !== null).length > 0" class="column is-2 winners">
      <div class="mt-2 box has-border-accent has-background-light">
        <h4 class="mb-4 is-family-sans-serif subtitle has-text-centered has-text-weight-bold" data-aos="fade-up">
          Winners
        </h4>
        <ul>
          <li
            v-for="prize in prizes.filter(p => p.winner && p.winner !== null)"
            :key="prize.day"
            class="is-flex py-1 is-justify-content-space-between is-size-7"
          >
            <span class="is-flex-grow-1">{{ prize.day }} Nov.</span>
            <span
              class="has-text-accent"
            >
              {{ prize.winner }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      prizes: [],
      currentDay: null,
      winners: true
    };
  },
  mounted () {
    this.getFestivalCalendar();
  },
  methods: {
    async getFestivalCalendar () {
      try {
        const response = await fetch('https://app.nosana.ci/festival-calendar');
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
  background-color: $box-background-color;
  cursor: default !important;
  &:before {
    margin-top: 40px !important;
  }
}
td.is-active {
  border-color: $accent !important;
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
.blockchain-address {
  font-family: monospace;
  text-overflow: ellipsis;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: block;
}

.winners {
  li {
    border-bottom: 1px solid #303930;
  }
}
</style>
