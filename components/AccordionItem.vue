<template>
  <li class="accordion__item" @click="open">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
    >
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger" />
      <span class="is-size-3 has-text-accent" style="line-height: 1">
        <span v-if="visible">-</span>
        <span v-else>+</span>
      </span>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-show="visible" class="accordion__content">
        <ul>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content" />
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  inject: ['Accordion'],
  props: {},
  data () {
    return {
      index: null
    };
  },
  computed: {
    visible () {
      return this.index === this.Accordion.active;
    }
  },
  created () {
    this.index = this.Accordion.count++;
  },
  methods: {
    open () {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start (el) {
      el.style.height = el.scrollHeight + 'px';
    },
    end (el) {
      el.style.height = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  padding: 10px 20px 10px 40px;
  border-bottom: 1px solid $accent;
  position: relative;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba($accent, 0.08);
  }
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  &.accordion__trigger_active {
    color: $accent;
    > * {
      color: $accent;
    }
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
