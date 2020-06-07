<template>
  <div>
    <h4>Создание и редактирование запчастей</h4>
    <b-form class="pb-2" @submit.prevent.stop="savePart">
      <div class="d-flex flex-wrap">
        <b-form-group class="pb-2 mr-2">
          <label for="partIdForm">№ детали:</label>
          <b-input
            required
            id="partIdForm"
            type="text"
            :value="partId"
            v-model="partId" />
        </b-form-group>
        <b-form-group class="pb-2 mr-2">
          <label for="partNameForm">Название запчасти:</label>
          <b-input
            required
            id="partNameForm"
            type="text"
            v-model="partName" />
        </b-form-group>
        <b-form-group class="pb-2 mr-2">
          <label for="vendorCodeForm">Код товара:</label>
          <b-input
            required
            id="vendorCodeForm"
            type="text"
            v-model="vendorCode"/>
        </b-form-group>
        <b-form-group class="pb-2 mr-2">
          <label for="manufacturerIdForm">Производитель:</label>
          <vue-bootstrap-typeahead
            required
            ref="typeahead"
            id="manufacturerIdForm"
            v-model="brand"
            @hit="setManufacturerId"
            :data="brandList"
            :minMatchingChars="2" />
        </b-form-group>
      </div>
      <div class="d-flex">
        <b-form-group class="pb-2 mr-2">
          <label for="priceMinForm">Цена:</label>
          <b-input
            required
            id="priceMinForm"
            type="number"
            v-model="priceMin" />
        </b-form-group>
        <b-form-group class="pb-2 mr-2">
          <label for="allOffersCountForm">Количество:</label>
          <b-input
            required
            id="allOffersCountForm"
            type="number"
            v-model="allOffersCount" />
        </b-form-group>
      </div>
      <b-button variant="primary" class="mr-2" @click="savePart">Сохранить</b-button>
      <b-button variant="warning" @click="resetForm">Сбросить</b-button>
    </b-form>
  </div>
</template>

<script>
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';

export default {
  name: 'PartForm',
  components: {
    VueBootstrapTypeahead,
  },
  data() {
    return {
      partId: '',
      partName: '',
      vendorCode: '',
      brand: '',
      priceMin: '',
      manufacturerId: '',
      allOffersCount: '',
      createdAt: '',
      isDeleted: '',
    };
  },
  computed: {
    partData() {
      const partData = this.$store.getters.editedPart;
      this.setData(partData);
      return partData;
    },
    brandList() {
      const { partsList } = this.$store.getters;
      const brands = [];
      partsList.map((el) => {
        brands.push(el.brand);
        return el;
      });
      return [...new Set(brands)];
    },
  },
  watch: {
    partData(val) {
      this.formData = val;
      this.$refs.typeahead.inputValue = val.brand;
    },
  },
  methods: {
    setManufacturerId() {
      const { manufacturerIds } = this.$store.getters;
      const brand = this.$refs.typeahead.inputValue.toUpperCase();
      let id = '';
      let manufacturer = manufacturerIds.find((el) => (el.text === brand));

      if (!manufacturer) {
        manufacturer = manufacturerIds.sort((a, b) => (b.value - a.value));
        id = manufacturer[0].value + 1;
      } else {
        id = manufacturer.value;
      }
      return id;
    },
    setData(partData) {
      this.partId = partData.partId;
      this.partName = partData.partName;
      this.vendorCode = partData.vendorCode;
      this.brand = partData.brand;
      this.manufacturerId = partData.manufacturerId;
      this.priceMin = partData.priceMin;
      this.allOffersCount = partData.allOffersCount;
      this.createdAt = partData.createdAt;
      this.isDeleted = partData.isDeleted;
    },
    savePart() {
      this.createdAt = this.partData.createdAt && this.partData.partId
        === this.partId ? this.partData.createdAt : new Date().toLocaleString();
      this.brand = this.brand.toUpperCase();
      this.isDeleted = this.partData.isDeleted || false;
      this.manufacturerId = this.setManufacturerId();

      const formData = {
        partId: this.partId,
        partName: this.partName,
        vendorCode: this.vendorCode,
        brand: this.brand,
        manufacturerId: this.manufacturerId,
        priceMin: this.priceMin,
        allOffersCount: this.allOffersCount,
        createdAt: this.createdAt,
        isDeleted: this.isDeleted,
      };

      this.$store.dispatch('updatePart', formData);
      this.resetForm();
    },
    resetForm() {
      this.$refs.typeahead.inputValue = '';
      this.$store.dispatch('resetForm');
    },
  },
};
</script>
