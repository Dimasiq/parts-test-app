<template>
  <div class="home">
    <h1>Все запчасти</h1>
    <PartsList />
  </div>
</template>

<script>

import PartsList from '../components/PartsList.vue';

export default {
  name: 'Home',
  components: {
    PartsList,
  },
};
</script>
