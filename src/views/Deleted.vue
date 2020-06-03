<template>
  <div class="deleted">
    <h1>Запчасти в архиве</h1>
    <PartsList />
  </div>
</template>

<script>
import PartsList from '../components/PartsList.vue';

export default {
  name: 'Deleted',
  components: {
    PartsList,
  },
};
</script>
