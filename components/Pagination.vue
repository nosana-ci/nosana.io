<template>
  <div v-show="totalPages > 1" class="container">
    <nav
      class="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <ul class="pagination-list">
        <li>
          <a
            class="pagination-link mx-2"
            :class="{ 'is-disabled': isInFirstPage }"
            type="button"
            :disabled="isInFirstPage"
            aria-label="Go to first page"
            @click="changePage(currentPage - 1)"
          >
            Prev
          </a>
        </li>

        <li
          v-if="currentPage > 2 && totalPages > 3"
        >
          <a
            class="pagination-link"
            @click="changePage(1)"
          >
            1</a>
        </li>
        <li v-if="currentPage > 2 && totalPages > 3">
          <span class="pagination-ellipsis">&hellip;</span>
        </li>

        <li v-for="(page, index) in pages" :key="index">
          <a
            type="button"
            class="pagination-link mx-2"
            :class="{ 'is-current': isPageActive(page.name) }"
            :aria-label="`Go to page number ${page.name}`"
            @click="changePage(page.name)"
          >
            {{ page.name }}
          </a>
        </li>
        <li v-if="totalPages > 3 && currentPage < totalPages-2">
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li
          v-if="totalPages > 3 && currentPage < totalPages-1"
        >
          <a
            class="
          pagination-link"
            @click="changePage(totalPages)"
          >
            {{ totalPages }}</a>
        </li>

        <li>
          <a
            class="pagination-link mx-2"
            type="button"
            :disabled="isInLastPage"
            aria-label="Go to last page"
            :class="{ 'is-disabled': isInLastPage }"
            @click="changePage(currentPage + 1)"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage () {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.totalPages === 2) {
        return this.totalPages - 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1;
    },
    endPage () {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages () {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    isInFirstPage () {
      return this.currentPage === 1;
    },
    isInLastPage () {
      return this.currentPage === this.totalPages;
    }
  },
  methods: {
    changePage (page) {
      this.$router.replace({ query: { page } });
    },
    isPageActive (page) {
      return this.currentPage === page;
    }
  }
};
</script>

<style lang="scss" scoped>
.is-disabled {
  pointer-events: none;
}
.pagination-ellipsis {
  color: $text;
}

.pagination-link {
  background: #F9F9F9;
  color: $text;
  border: 0;
  height: 3.5em;
  padding: 25px;
  &.is-current {
    background: #F9F9F9;
    font-weight: bold;
    color: black;
  }
}
</style>
