<template>
  <b-tr>
    <b-td>
      {{ createdAt.date }}
      <pre class="mb-0">{{ createdAt.time }}</pre>
    </b-td>
    <b-td>
      {{ partData.vendorCode}}
    </b-td>
    <b-td>
      {{ partData.allOffersCount }} шт.
    </b-td>
    <b-td>
      {{ partData.priceMin }}
    </b-td>
    <b-td>
      {{ partData.brand }}
    </b-td>
    <b-td>
      {{ partData.partName }}
    </b-td>
    <b-td>
      {{ partData.partId }}
    </b-td>
    <b-td>
      {{ partData.isDeleted ? 'В архиве' : 'Доступна' }}
    </b-td>
    <b-td class="d-flex flex-column justify-content-center">
      <b-button
        class="mb-2"
        :variant="partData.isDeleted ? 'success' : 'danger'"
        @click="togglePart(partData.partId)">
        {{ partData.isDeleted ? 'Восстановить' : 'Удалить' }}
      </b-button>
      <b-button
        variant="primary"
        @click="setFormPart(partData)">
        Изменить
      </b-button>
    </b-td>
  </b-tr>
</template>

<script>
export default {
  name: 'PartItem',
  props: {
    partData: {
      default() {
        return {};
      },
      type: Object,
    },
  },
  computed: {
    createdAt() {
      const date = new Date(this.partData.createdAt).toLocaleDateString();
      const time = new Date(this.partData.createdAt).toLocaleTimeString();
      return {
        date,
        time,
      };
    },
  },
  methods: {
    togglePart(id) {
      this.$store.dispatch('togglePart', id);
    },
    setFormPart(partData) {
      window.scrollTo(0, 0);
      const editedPart = partData;
      this.$store.dispatch('setFormPart', editedPart);
    },
  },
};
</script>

<style lang="scss" scoped>
tr {
  td {
    font-size: 13px;
    vertical-align: middle;
    button {
      width: 130px;
      font-size: 13px;
    }
  }
}
</style>
