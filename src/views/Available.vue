<template>
  <div class="available">
    <h1>Доступные запчасти</h1>
    <PartsList />
  </div>
</template>

<script>
import PartsList from '../components/PartsList.vue';

export default {
  name: 'Available',
  components: {
    PartsList,
  },
};
</script>
