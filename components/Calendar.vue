<template>
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
            v-for="day in 7"
            :key="day"
            :class="{'is-active': currentDay === (day + 28 + 7*(week-1))%31 + 1,
                     'is-selected': prizes && prizes[(day + 28 + 7*(week-1))%31 + 1].prize}"
          >
            {{ (day + 28 + 7*(week-1))%31 + 1 }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {

  data () {
    // const now = new Date();
    return {
      prizes: {
        30: { type: 'normal', prize: 1 },
        31: { type: 'normal', prize: 2 },
        1: { type: 'normal', prize: 3 },
        2: { type: 'normal', prize: 4 },
        3: { type: 'normal', prize: 5 },
        4: { type: 'normal', prize: null },
        5: { type: 'normal', prize: null },
        6: { type: 'normal', prize: null },
        7: { type: 'normal', prize: null },
        8: { type: 'normal', prize: null },
        9: { type: 'normal', prize: null },
        10: { type: 'normal', prize: null },
        11: { type: 'normal', prize: null },
        12: { type: 'normal', prize: null }
      },
      currentDay: 3
    };
  }
};
</script>
<style lang="scss" scoped>
th {
  border: none;
}
td {
  min-width: 156px;
  height: 130px;
  border-color: $grey;
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
