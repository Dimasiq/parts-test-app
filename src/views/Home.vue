<template>
  <div class="home pt-4">
    <h1>Список запчастей</h1>
    <PartForm />
    <FiltersBox />
    <div class="tabs mt-4">
      <span
        @click="changeFilter('all')"
        class="tab-link"
        :class="{ 'active': this.activeTab === 'all'}"
      >Все</span> |
      <span
        @click="changeFilter('available')"
        class="tab-link"
        :class="{ 'active': this.activeTab === 'available'}"
      >В наличии</span> |
      <span
        @click="changeFilter('deleted')"
        class="tab-link"
        :class="{ 'active': this.activeTab === 'deleted'}"
      >Удалённые</span>
    </div>
    <PartsList />
  </div>
</template>

<script>

import PartForm from '../components/PartForm.vue';
import FiltersBox from '../components/FiltersBox.vue';
import PartsList from '../components/PartsList.vue';

export default {
  name: 'Home',
  components: {
    PartForm,
    FiltersBox,
    PartsList,
  },
  computed: {
    activeTab() {
      return this.$store.getters.activeTab;
    },
  },
  methods: {
    changeFilter(value) {
      this.$store.dispatch('changeActiveTab', value);
    },
  },
};
</script>

<style lang="scss">
.tabs {
  .tab-link {
    color: #2c3e50;
    &.active {
      text-decoration: underline;
      font-weight: bold;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
