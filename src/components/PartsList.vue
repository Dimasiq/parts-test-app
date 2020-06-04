<template>
  <div>
    <div class="mt-2">
      <span>Кол-во на странице: </span>
      <select v-model="pageCount">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>
    </div>
    <div>
      <div v-if="!partsList.length" class="mt-4">
        <h4>Список пуст</h4>
        <p>Не удалось найти запчасти по заданным параметрам.
           Пожалуйста, измените условия поиска.</p>
      </div>
      <b-table-simple class="mt-3" responsive v-else>
        <b-thead>
          <b-tr>
            <b-th>Код товара</b-th>
            <b-th>Остаток</b-th>
            <b-th>Цена</b-th>
            <b-th>Производитель</b-th>
            <b-th class="name-col">Наименование</b-th>
            <b-th>Номер детали</b-th>
            <b-th>Статус</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
        <b-tr v-for="part in partsList" :key="part.partId">
          <b-td>
            {{ part.vendorCode}}
          </b-td>
          <b-td>
            3
          </b-td>
          <b-td>
            100
          </b-td>
          <b-td>
            {{ part.brand }}
          </b-td>
          <b-td>
            {{ part.partName }}
          </b-td>
          <b-td>
            {{ part.partId }}
          </b-td>
          <b-td>
            {{ part.isDeleted ? 'В архиве' : 'Доступна' }}
          </b-td>
          <b-td class="d-flex justify-content-center">
            <button @click="togglePart(part.partId)">
              {{ part.isDeleted ? 'Восстановить' : 'Удалить'}}
            </button>
          </b-td>
        </b-tr>
        </b-tbody>
      </b-table-simple>
      <ul >
      </ul>
    </div>
    <div>
      <button
        @click="prevPage"
        :disabled="pageNum == 0">
        Prev
      </button>
      <button
        @click="nextPage"
        :disabled="pageNum >= pageTotal-1 || partsList.length < (pageCount * 1)">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { BTableSimple } from 'bootstrap-vue';

export default {
  name: 'PartsList',
  components: {
    BTableSimple,
  },
  data() {
    return {
      partsTotal: 0,
      pageNum: 0,
      pageCount: 5,
    };
  },
  props: {
    filtering: {
      type: String,
      default: 'all',
    },
  },
  mounted() {
    if (!this.partsList.length) {
      this.fetchPartsList();
    }
  },
  computed: {
    tabFiltering() {
      return this.$store.getters.getActiveTab;
    },
    partsList() {
      let partsList = [];
      if (this.tabFiltering === 'deleted') {
        partsList = this.$store.getters.getPartsList.filter((el) => {
          if (el.isDeleted) {
            return el;
          }
          return null;
        });
      } else if (this.tabFiltering === 'available') {
        partsList = this.$store.getters.getPartsList.filter((el) => {
          if (!el.isDeleted) {
            return el;
          }
          return null;
        });
      } else {
        partsList = this.$store.getters.getPartsList;
      }
      this.setPartsTotal(partsList);
      const start = this.pageNum * (this.pageCount * 1);
      const end = start + this.pageCount * 1;
      return partsList.slice(start, end);
    },
    pageTotal() {
      const len = this.partsTotal;
      const size = this.pageCount * 1;
      console.log(len / size);
      return Math.ceil(len / size);
    },
  },
  watch: {
    tabFiltering() {
      this.pageNum = 0;
    },
    pageCount() {
      this.pageNum = 0;
    },
  },
  methods: {
    async fetchPartsList() {
      await this.$store.dispatch('fetchPartsList');
    },
    togglePart(id) {
      this.partsList.map((el) => {
        if (el.partId === id) {
          const changedElem = { ...el };
          changedElem.isDeleted = !changedElem.isDeleted;
          this.$store.dispatch('updatePart', changedElem);
          return changedElem;
        }
        return el;
      });
    },
    setPartsTotal(partsList) {
      this.partsTotal = partsList.length;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    nextPage() {
      this.pageNum += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
th.name-col {
  width: 15rem;
}
tr {
  td {
    vertical-align: middle;
    button {
      width: 120px;
    }
  }
}
</style>
