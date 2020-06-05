<template>
  <div>
    <div class="mt-2">
      <span>Кол-во на странице: </span>
      <select v-model="pagePortion">
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
            <b-th class="date-col" @click="setSorting('createdAt')">Дата создания
              {{ sorting.param === 'createdAt' ? (sorting.desc ? '&#8595;' : '&#8593;') : '' }}
            </b-th>
            <b-th>Код товара</b-th>
            <b-th>Остаток</b-th>
            <b-th class="price-col" @click="setSorting('priceMin')">Цена
              {{ sorting.param === 'priceMin' ? (sorting.desc ? '&#8595;' : '&#8593;') : '' }}
            </b-th>
            <b-th>Производитель</b-th>
            <b-th class="name-col">Наименование</b-th>
            <b-th @click="setSorting('partId')">Номер детали
              {{ sorting.param === 'partId' ? (sorting.desc ? '&#8595;' : '&#8593;') : '' }}
            </b-th>
            <b-th>Статус</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="part in partsList" :key="part.partId">
            <b-td>
              {{ getDate(part.createdAt) }}
            </b-td>
            <b-td>
              {{ part.vendorCode}}
            </b-td>
            <b-td>
              3
            </b-td>
            <b-td>
              {{ part.priceMin }}
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
    <div v-if="partsList.length">
      {{ stringShown }}
      <br/>
      <button
        @click="prevPage"
        :disabled="currentPage[tabFiltering] == 0">
        Prev
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage[tabFiltering] >= pagesTotal - 1
          || partsList.length < (pagePortion * 1)">
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
      currentPage: {
        all: 0,
        deleted: 0,
        available: 0,
      },
      pagePortion: 10,
    };
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
    sorting() {
      return this.$store.getters.sorting;
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
      return this.paginateParts(partsList);
    },
    pagesTotal() {
      const len = this.partsTotal;
      const size = this.pagePortion * 1;
      return Math.ceil(len / size);
    },
    stringShown() {
      const pageStart = this.currentPage[this.tabFiltering] * Number(this.pagePortion) + 1;
      const pageEnd = this.currentPage[this.tabFiltering] === this.pagesTotal - 1 ? this.partsTotal
        : (pageStart + Number(this.pagePortion)) - 1;
      return `Показаны запчасти ${pageStart} - ${pageEnd} из ${this.partsTotal}`;
    },
  },
  watch: {
    tabFiltering(val) {
      if (this.currentPage[val] !== 0 && this.partsList.length === 0) {
        this.prevPage();
      }
    },
    pagePortion() {
      this.currentPage = {
        all: 0,
        deleted: 0,
        available: 0,
      };
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
      if (this.partsList.length === 0 && this.currentPage[this.tabFiltering] !== 0) {
        this.prevPage();
      }
    },
    paginateParts(partsList) {
      this.setPartsTotal(partsList);
      const start = this.currentPage[this.tabFiltering] * (this.pagePortion * 1);
      const end = start + this.pagePortion * 1;
      return partsList.slice(start, end);
    },
    setPartsTotal(partsList) {
      this.partsTotal = partsList.length;
    },
    setSorting(param) {
      const payload = { ...this.sorting };
      if (this.sorting.param === param) {
        payload.desc = !payload.desc;
      } else {
        payload.param = param;
        payload.desc = true;
      }
      this.$store.dispatch('setSorting', payload);
    },
    getDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
    },
    prevPage() {
      this.currentPage[this.tabFiltering] -= 1;
    },
    nextPage() {
      this.currentPage[this.tabFiltering] += 1;
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
      width: 120px;
    }
  }
}
</style>
