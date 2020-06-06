<template>
  <b-form inline>
    <b-form-group @submit.prevent="setFiltering">
      <b-form-group
        label="Производитель:"
        label-for="vendor_code" />
        <b-form-select
        id="vendor_code"
          v-model="filteringOptions.manufacturerId"
          :options="manufacturerId">
          <template v-slot:first>
            <b-form-select-option :value="null">
              Все
            </b-form-select-option>
          </template>
        </b-form-select>
    </b-form-group>
    <b-form-group class="ml-4">
      <b-form-group
        label="Номер запчасти:"
        label-for="vendorCode" />
      <b-input
        id="vendorCode"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="filteringOptions.vendorCode"
        placeholder="Введите номер запчасти..."
        @input="setVendorCode"
      ></b-input>
    </b-form-group>
  </b-form>
</template>

<script>

export default {
  name: 'FiltersBox',
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
  },
  methods: {
    setVendorCode() {
      const { vendorCode } = this.filteringOptions;
      if (vendorCode === '') {
        this.filteringOptions.vendorCode = null;
        this.setFiltering();
      } else if (vendorCode.length < 3) {
        return;
      }
      this.setFiltering();
    },
    setFiltering() {
      this.$store.dispatch('setFiltering', this.filteringOptions);
    },
  },
};
</script>
