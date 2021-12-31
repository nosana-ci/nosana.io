<template>
  <div class="has-text-centered">
    <h1 class="title">
      Whitelist for IDO on Solanium starts in
    </h1>
    <circular-count-down-timer
      :circles="[
        {
          id: '4',
          steps: 20,
          size: 130,
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
          size: 130,
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
          size: 130,
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
          size: 130,
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
    />
    <a class="button is-accent is-medium has-text-weight-semibold mt-4" target="_blank" href="https://www.solanium.io/project/nosana/">Go to IDO</a>
  </div>
</template>

<script>
export default {
  data () {
    const dateFuture = new Date(1641816000000)
    const dateNow = new Date()

    let seconds = Math.floor((dateFuture - (dateNow)) / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    hours = hours - (days * 24)
    minutes = minutes - (days * 24 * 60) - (hours * 60)
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60)
    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}
</script>

<style lang="scss">
.circles__container {
  justify-content: center;
  flex-wrap: wrap;
  .circle__item {
    margin: 15px;
  }
}
</style>
