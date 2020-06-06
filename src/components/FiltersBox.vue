<template>
  <div>
    <h3>Фильтрация</h3>
    <b-form class="pb-2" inline>
      <b-form-group class="pb-4 mr-2" @submit.prevent="setFiltering">
        <b-form-group
          label="Производитель:"
          label-for="vendor_code" />
          <b-form-select
            id="vendor_code"
            v-model="filteringOptions.manufacturerId"
            :options="manufacturerId"
            @change="setFiltering">
            <template v-slot:first>
              <b-form-select-option :value="null">
                Все
              </b-form-select-option>
            </template>
          </b-form-select>
      </b-form-group>
      <b-form-group class="pb-4 mr-2">
        <b-form-group
          label="Номер запчасти:"
          label-for="vendorCode" />
        <vue-bootstrap-typeahead
          ref="typeahead"
          v-model="vendorCode"
          :data="vendorCodesList"
          :minMatchingChars="2"
          @input="setVendorCode"
        />
      </b-form-group>
      <b-form-group class="pb-4 mr-2">
        <b-form-group
          label="Дата создания от:"
          label-for="datepicker-from" />
        <b-form-datepicker
          id="datepicker-from"
          v-model="filteringOptions.dateFrom"
          @input="setFiltering"
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
          v-model="filteringOptions.dateTo"
          @input="setFiltering"
        />
        <span
          v-if="filteringOptions.dateTo"
          class="position-absolute clear-date"
          @click="clearDate('dateTo')">Очистить</span>
      </b-form-group>
    </b-form>
    <b-button variant="warning" class="mt-2" @click="resetFilters">Сбросить фильтры</b-button>
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
      vendorCode: '',
    };
  },
  mounted() {
    let val = '';
    if (localStorage.listFiltering) {
      val = JSON.parse(localStorage.listFiltering).vendorCode || '';
    }
    this.$refs.typeahead.inputValue = val;
  },
  computed: {
    filteringOptions() {
      return this.$store.getters.filters;
    },
    manufacturerId() {
      const { partsList } = this.$store.getters;
      const manufacturerIds = [];
      partsList.map((el) => {
        manufacturerIds.push({
          value: el.manufacturerId,
          text: el.brand,
        });
        return el;
      });
      manufacturerIds.sort((a, b) => a.text.localeCompare(b.text));
      return [...new Map(manufacturerIds.map((el) => [el.value, el])).values()];
    },
    vendorCodesList() {
      const { partsList } = this.$store.getters;
      const vendorCodes = [];
      partsList.map((el) => {
        vendorCodes.push(String(el.vendorCode));
        return el;
      });
      return vendorCodes;
    },
  },
  watch: {
    vendorCode(val) {
      console.log('watch vendorCode val', val);
      if (val === '') {
        this.filteringOptions.vendorCode = val;
        this.setFiltering();
      }
    },
  },
  methods: {
    setVendorCode() {
      this.filteringOptions.vendorCode = this.vendorCode;
      this.setFiltering();
    },
    resetFilters() {
      const { defaultFiltering } = this.$store.getters;
      this.$refs.typeahead.inputValue = '';
      this.$store.dispatch('setFiltering', defaultFiltering);
    },
    clearDate(field) {
      this.filteringOptions[field] = null;
      this.setFiltering();
    },
    setFiltering() {
      this.$store.dispatch('setFiltering', this.filteringOptions);
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
