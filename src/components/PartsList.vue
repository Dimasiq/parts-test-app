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
            <b-th class="date-col sortable position-relative"
              :class="sorting.param === 'createdAt' ? (sorting.desc ? 'desc' : 'asc') : ''"
              @click="setSorting('createdAt')">Создано
            </b-th>
            <b-th class="code-col">Код товара</b-th>
            <b-th>Остаток</b-th>
            <b-th class="price-col sortable position-relative"
              :class="sorting.param === 'priceMin' ? (sorting.desc ? 'desc' : 'asc') : ''"
              @click="setSorting('priceMin')">Цена
            </b-th>
            <b-th>Производитель</b-th>
            <b-th class="name-col">Наименование</b-th>
            <b-th class="part-id-col sortable position-relative"
              :class="sorting.param === 'partId' ? (sorting.desc ? 'desc' : 'asc') : ''"
              @click="setSorting('partId')">№ детали
            </b-th>
            <b-th>Статус</b-th>
            <b-th class="pl-4"></b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <PartItem
            v-for="part in partsList" :key="part.partId"
            :partData="part" />
        </b-tbody>
      </b-table-simple>
      <ul >
      </ul>
    </div>
    <p>{{ stringShown }}</p>
    <div class="mb-4" v-if="partsList.length && pagesTotal !== 1">
      <br/>
      <b-button
        class="mr-4"
        variant="primary"
        @click="prevPage"
        :disabled="currentPage[tabFiltering] == 0">
        Назад
      </b-button>
      <b-button
        variant="primary"
        @click="nextPage"
        :disabled="currentPage[tabFiltering] >= pagesTotal - 1
          || partsList.length < (pagePortion * 1)">
        Далее
      </b-button>
    </div>
  </div>
</template>

<script>
import PartItem from './PartItem.vue';

export default {
  name: 'PartsList',
  components: {
    PartItem,
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
      return this.$store.getters.activeTab;
    },
    sorting() {
      return this.$store.getters.sorting;
    },
    partsList() {
      let partsList = [];
      if (this.tabFiltering === 'deleted') {
        partsList = this.$store.getters.deletedParts;
      } else if (this.tabFiltering === 'available') {
        partsList = this.$store.getters.availableParts;
      } else {
        partsList = this.$store.getters.partsList;
      }
      return this.paginateParts(this.setFilters(partsList));
    },
    filters() {
      return this.$store.getters.filters;
    },
    pagesTotal() {
      const len = this.partsTotal;
      const size = this.pagePortion * 1;
      return Math.ceil(len / size);
    },
    stringShown() {
      if (!this.partsList.length) {
        return '';
      }
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
      this.resetPagination();
    },
  },
  methods: {
    async fetchPartsList() {
      await this.$store.dispatch('init');
    },
    checkEmptyPage() {
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
      payload.param = param;
      this.$store.dispatch('setSorting', payload);
    },
    setFilters(parts) {
      this.resetPagination();
      const { filters } = this.$store.getters;
      let filteredParts = parts;

      if (filters.manufacturerId) {
        filteredParts = filteredParts.filter((el) => (
          el.manufacturerId === filters.manufacturerId ? el : null
        ));
      }

      if (filters.vendorCode && filters.vendorCode !== null && filters.vendorCode.length >= 3) {
        filteredParts = filteredParts.filter((el) => (
          String(el.vendorCode).toLowerCase().includes(String(filters.vendorCode).toLowerCase())
        ));
      }

      if (filters.dateFrom) {
        filteredParts = filteredParts.filter((el) => {
          const partCreated = new Date(new Date(el.createdAt).getTime()).toLocaleDateString();
          const filterDate = new Date(new Date(filters.dateFrom).getTime()).toLocaleDateString();
          return Date.parse(partCreated) >= Date.parse(filterDate) ? el : null;
        });
      }

      if (filters.dateTo) {
        filteredParts = filteredParts.filter((el) => {
          const partCreated = new Date(new Date(el.createdAt).getTime()).toLocaleDateString();
          const filterDate = new Date(new Date(filters.dateTo).getTime()).toLocaleDateString();
          return Date.parse(partCreated) <= Date.parse(filterDate) ? el : null;
        });
      }
      return filteredParts;
    },
    resetPagination() {
      this.currentPage = {
        all: 0,
        deleted: 0,
        available: 0,
      };
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
th {
  font-size: 14px;
  text-align: left;
  &.sortable {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
  &.code-col {
    min-width: 8rem;
    width: 8rem;
  }
  &.name-col {
    min-width: 12rem;
    width: 12rem;
  }
  &.date-col {
    min-width: 7rem;
    width: 7rem;
  }
  &.price-col {
    min-width: 5rem;
    width: 5rem;
  }
  &.part-id-col {
    min-width: 7rem;
    width: 7rem;
  }
  &::after {
    width: auto;
    height: auto;
    display: block;
    position: absolute;
    right: 20px;
    top: 20%;
  }
  &.asc {
    &::after {
      content: "↑";
    }
  }
  &.desc {
    &::after {
      content: "↓";
    }
  }
}
</style>
