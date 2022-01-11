<template>
  <div class="has-text-centered">
    <h1 class="title">
      {{ title }}
    </h1>
    <circular-count-down-timer
      v-if="showTimer"
      class="circles__container"
      :circles="[
        {
          id: '4',
          steps: 20,
          size: 125,
          value: days,
          stepLength: -1,
          label: 'days',
          strokeColor: '#5FFF00',
          underneathStrokeColor: '#1c282a',
          fillColor: '#010C04',
          valueFontSize: 50,
          strokeWidth: 5,
          labelFontSize: 25,
        },
        {
          id: '3',
          steps: 24,
          size: 125,
          value: hours,
          stepLength: -1,
          label: 'hours',
          dependentCircles: ['4'],
          strokeColor: '#5FFF00',
          underneathStrokeColor: '#1c282a',
          fillColor: '#010C04',
          valueFontSize: 50,
          strokeWidth: 5,
          labelFontSize: 25,
        },
        {
          id: '2',
          steps: 60,
          size: 125,
          value: minutes,
          stepLength: -1,
          label: 'minutes',
          dependentCircles: ['3'],
          strokeColor: '#5FFF00',
          underneathStrokeColor: '#1c282a',
          fillColor: '#010C04',
          valueFontSize: 50,
          strokeWidth: 5,
          labelFontSize: 25,

        },
        {
          id: '1',
          steps: 60,
          size: 125,
          value: seconds,
          stepLength: -1,
          label: 'seconds',
          dependentCircles: ['2'],
          strokeColor: '#5FFF00',
          underneathStrokeColor: '#1c282a',
          fillColor: '#010C04',
          valueFontSize: 50,
          strokeWidth: 5,
          labelFontSize: 25,
        }
      ]"
      :main-circle-id="'1'"
      :stop-conditions="{ '1': 0, '2': 0, '3': 0, '4': 0}"
      @finished="updateTimer"
    />
    <a class="button is-accent is-medium has-text-weight-semibold mt-4" target="_blank" href="https://www.solanium.io/project/nosana/">Register for Whitelist</a>
  </div>
</template>

<script>
export default {
  data () {
    const dateWhitelistEnd = new Date(1641996000000)
    const dateSaleSart = new Date(1642003200000)
    const dateSaleEnd = new Date(1642168800000)
    const dateNow = new Date()
    let dateEnd
    let title
    let showTimer = true
    if (dateNow < dateWhitelistEnd) {
      title = 'Whitelist for IDO now open!'
      console.log('dateWhitelistEnd', dateWhitelistEnd)
      dateEnd = dateWhitelistEnd
    } else if (dateNow < dateSaleSart) {
      title = 'Tokensale starts in:'
      console.log('dateSaleSart', dateSaleSart)
      dateEnd = dateSaleSart
    } else if (dateNow < dateSaleEnd) {
      title = 'IDO Tokensale now open!'
      console.log('dateSaleEnd', dateSaleEnd)
      dateEnd = dateSaleEnd
    } else {
      showTimer = false
    }

    let seconds = Math.floor((dateEnd - (dateNow)) / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    hours = hours - (days * 24)
    minutes = minutes - (days * 24 * 60) - (hours * 60)
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60)
    return {
      showTimer,
      days,
      hours,
      minutes,
      seconds,
      title
    }
  },
  methods: {
    updateTimer () {
      console.log('Update timer')
      const dateWhitelistEnd = new Date(1641996000000)
      const dateSaleSart = new Date(1642003200000)
      const dateSaleEnd = new Date(1642168800000)
      const dateNow = new Date()
      // add 5 second error marge
      dateNow.setSeconds(dateNow.getSeconds() + 5)
      let dateEnd
      this.showTimer = true
      if (dateNow < dateWhitelistEnd) {
        this.title = 'Whitelist for IDO now open!'
        console.log('dateWhitelistEnd', dateWhitelistEnd)
        dateEnd = dateWhitelistEnd
      } else if (dateNow < dateSaleSart) {
        this.title = 'Tokensale starts in:'
        console.log('dateSaleSart', dateSaleSart)
        dateEnd = dateSaleSart
      } else if (dateNow < dateSaleEnd) {
        this.title = 'IDO Tokensale now open!'
        console.log('dateSaleEnd', dateSaleEnd)
        dateEnd = dateSaleEnd
      } else {
        this.showTimer = false
      }

      let seconds = Math.floor((dateEnd - (dateNow)) / 1000)
      let minutes = Math.floor(seconds / 60)
      let hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      hours = hours - (days * 24)
      minutes = minutes - (days * 24 * 60) - (hours * 60)
      seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60)

      this.days = days
      this.hours = hours
      this.minutes = minutes
      this.seconds = seconds
    }
  }
}
</script>

<style lang="scss">
.circles__container {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .circle__item {
    margin: 15px;
  }
}
</style>
