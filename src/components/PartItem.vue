<template>
  <b-tr>
    <b-td>
      {{ createdAt.date }}
      <pre>{{ createdAt.time }}</pre>
    </b-td>
    <b-td>
      {{ partData.vendorCode}}
    </b-td>
    <b-td>
      3
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
    <b-td class="d-flex justify-content-center">
      <b-button
        :variant="partData.isDeleted ? 'success' : 'danger'"
        @click="togglePart(partData.partId)">
        {{ partData.isDeleted ? 'Восстановить' : 'Удалить' }}
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
      const { partsList } = this.$store.getters;
      partsList.map((el) => {
        if (el.partId === id) {
          const changedElem = { ...el };
          changedElem.isDeleted = !changedElem.isDeleted;
          this.$store.dispatch('updatePart', changedElem);
          return changedElem;
        }
        return el;
      });
      this.$emit('togglePart');
    },
  },
};
</script>

<style lang="scss" scoped>
th.name-col {
  width: 15rem;
}
th.date-col {
  width: 10rem;
}
th.price-col {
  width: 6rem;
}
tr {
  td {
    vertical-align: middle;
    button {
      width: 130px;
    }
  }
}
</style>
