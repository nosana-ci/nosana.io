<script>
export default {
  name: 'VueInfiniteSlideBar',
  props: {
    barStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    duration: {
      type: String,
      default: '20s'
    },
    direction: {
      type: String,
      default: 'normal'
    },
    delay: {
      type: String,
      default: '0s'
    },
    paused: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customStyle () {
      return {
        ...this.barStyle,
        'animation-duration': this.duration,
        'animation-direction': this.direction,
        'animation-delay': this.delay,
        'animation-play-state': this.paused ? 'paused' : 'running'
      }
    }
  },
  render (createElement) {
    const bar = createElement(
      'div',
      { class: 'vifnslb-bar' },
      this.$slots.default
    )
    const slider = createElement(
      'div',
      { class: ['vifnslb-element'], style: this.customStyle },
      [bar, bar]
    )
    return createElement('div', { class: ['vifnslb-container'] }, [slider])
  }
}
</script>

<style lang="scss" scoped>
@keyframes moveSlideshow {
  100% {
    transform: translateX(-50%);
  }
}
.vifnslb-container {
  width: 100%;
  overflow: hidden;

  &:hover {
    .vifnslb-element {
      animation-play-state: paused !important;
    }
  }
}
.vifnslb-element {
  transform: translate3d(0, 0, 0); /* Hey browser, please use my GPU */
  position: relative;
  overflow: hidden;
  animation-name: moveSlideshow;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  display: flex;
  width: max-content;
  min-width: 200%;
}
.vifnslb-bar {
  width: 50%;
  min-width: max-content;
  display: flex;
  align-items: center;
}
</style>
