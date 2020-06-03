<template>
  <div class="container">
    <ul>
      <li v-for="part in partsList" :key="part.partId">
        {{ part.partName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PartsList',
  mounted() {
    if (!this.partsList.length) {
      this.fetchPartsList();
    }
  },
  computed: {
    partsList() {
      if (this.$router.currentRoute.name === 'Deleted') {
        return this.$store.getters.getPartsList.filter((el) => {
          if (el.isDeleted) {
            return el;
          }
          return null;
        });
      }

      if (this.$router.currentRoute.name === 'Available') {
        return this.$store.getters.getPartsList.filter((el) => {
          if (!el.isDeleted) {
            return el;
          }
          return null;
        });
      }

      return this.$store.getters.getPartsList;
    },
  },
  methods: {
    async fetchPartsList() {
      await this.$store.dispatch('fetchPartsList');
    },
  },
};
</script>
