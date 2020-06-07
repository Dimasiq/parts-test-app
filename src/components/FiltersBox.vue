<template>
  <div>
    <b-button v-b-toggle.collapse-2 @click="toggleFilters" class="mt-4 mb-4">
      {{ filtersVisible ? 'Скрыть фильтры' : 'Показать фильтры' }}
    </b-button>
    <b-collapse :visible="filtersVisible" id="collapse-2">
      <b-card>
        <h4>Фильтрация</h4>
        <b-form class="pb-2" inline @submit.prevent.stop>
          <b-form-group class="pb-4 mr-2" @submit.prevent="setFiltering">
            <b-form-group
              label="Производитель:"
              label-for="manufacturerId" />
              <b-form-select
                id="manufacturerId"
                v-model="manufacturerId"
                @input="setFiltering"
                :options="manufacturerIds">
                <template v-slot:first>
                  <b-form-select-option :value="null">
                    Все
                  </b-form-select-option>
                </template>
              </b-form-select>
          </b-form-group>
          <b-form-group class="pb-4 mr-2">
            <b-form-group
              label="Код товара:"
              label-for="vendorCode" />
            <vue-bootstrap-typeahead
              ref="typeahead"
              :value="vendorCode"
              :data="vendorCodesList"
              @hit="setFiltering"
              :minMatchingChars="2"
              v-model="vendorCode"
            />
          </b-form-group>
          <b-form-group class="pb-4 mr-2">
            <b-form-group
              label="Дата создания от:"
              label-for="datepicker-from" />
            <b-form-datepicker
              id="datepicker-from"
              :value="dateFrom"
              v-model="dateFrom"
              @input="setFiltering"
              :date-format-options="{
                'year':'numeric',
                'month':'short',
                'day':'numeric',
                'weekday':'short'}"
            />
            <span
              v-if="filteringOptions.dateFrom"
              class="position-absolute clear-date"
              @click="clearDate('dateFrom')">Очистить</span>
          </b-form-group>
          <b-form-group class="pb-4 mr-2">
            <b-form-group
              label="Дата создания до:"
              label-for="datepicker-to" />
            <b-form-datepicker
              id="datepicker-to"
              class="input-group"
              :value="dateTo"
              v-model="dateTo"
              @input="setFiltering"
              :date-format-options="{
                'year':'numeric',
                'month':'short',
                'day':'numeric',
                'weekday':'short'}"
            />
            <span
              v-if="filteringOptions.dateTo"
              class="position-absolute clear-date"
              @click="clearDate('dateTo')">Очистить</span>
          </b-form-group>
        </b-form>
        <b-button
          variant="warning"
          class="mt-2"
          @click="resetFilters">Сбросить фильтры</b-button>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';

export default {
  name: 'FiltersBox',
  components: {
    VueBootstrapTypeahead,
  },
  data() {
    return {
      filtersVisible: false,
      manufacturerId: null,
      vendorCode: null,
      dateFrom: null,
      dateTo: null,
    };
  },
  mounted() {
    if (localStorage.listFiltering) {
      const filters = JSON.parse(localStorage.listFiltering);
      this.$refs.typeahead.inputValue = filters.vendorCode || '';
      this.setFilterValues(filters);
    }
  },
  computed: {
    filteringOptions() {
      return this.$store.getters.filters;
    },
    manufacturerIds() {
      return this.$store.getters.manufacturerIds;
    },
    vendorCodesList() {
      return this.$store.getters.vendorCodesList;
    },
  },
  watch: {
    vendorCode(val) {
      if (val === '') {
        this.setFiltering();
      }
    },
  },
  methods: {
    toggleFilters() {
      this.filtersVisible = !this.filtersVisible;
    },
    setFilterValues(filters) {
      this.manufacturerId = filters.manufacturerId;
      this.dateFrom = filters.dateFrom;
      this.dateTo = filters.dateTo;
    },
    resetFilters() {
      this.manufacturerId = null;
      this.vendorCode = null;
      this.dateFrom = null;
      this.dateTo = null;
      this.$refs.typeahead.inputValue = '';

      this.$store.dispatch('resetFiltering');
    },
    clearDate(field) {
      this[field] = null;
      this.setFiltering();
    },
    setFiltering() {
      const vendorCode = this.$refs.typeahead.inputValue || '';
      const {
        manufacturerId,
        dateFrom,
        dateTo,
      } = this;

      this.$store.dispatch('setFiltering', {
        manufacturerId,
        vendorCode,
        dateFrom,
        dateTo,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  width: 14rem;
}
.clear-date {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
