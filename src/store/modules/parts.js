export default {
  actions: {
    init(ctx) {
      if (localStorage.listSorting) {
        ctx.commit('SET_SORTING', JSON.parse(localStorage.getItem('listSorting')));
        console.log('fetched sorting from localStorage');
      } else {
        ctx.commit('SET_SORTING', ctx.state.defaultSorting);
      }

      if (localStorage.listFiltering) {
        ctx.commit('SET_FILTERING', JSON.parse(localStorage.getItem('listFiltering')));
        console.log('fetched filters from localStorage');
      } else {
        ctx.commit('SET_FILTERING', ctx.state.defaultFiltering);
      }

      if (localStorage.partsList) {
        ctx.commit('UPDATE_PARTS_LIST', JSON.parse(localStorage.getItem('partsList')));
        console.log('fetched parts list from localStorage');
        return JSON.parse(localStorage.partsList);
      }

      const res = JSON.parse('{"data":[{"partId":"335443","createdAt":"2020-06-03T11:38:57Z","vendorCode":"4851139825","brand":"TOYOTA","partName":"Absorber a/s, s","priceMin":5089,"priceMax":5089,"userLocationCount":0,"allOffersCount":1,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"29684391","createdAt":"2020-06-03T11:20:21Z","vendorCode":"MD358361","brand":"MITSUBISHI","partName":"Датчик EGR","priceMin":2122,"priceMax":2122,"userLocationCount":0,"allOffersCount":1,"descriptionIsset":true,"manufacturerId":2,"isDeleted":1},{"partId":"17655549","createdAt":"2020-06-03T10:01:08Z","vendorCode":"9038914048","brand":"TOYOTA","partName":"Сайлентблок амортизатора","priceMin":912,"priceMax":1040,"userLocationCount":2,"allOffersCount":28,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"11149109","createdAt":"2020-06-03T09:14:05Z","vendorCode":"25915BH20D","brand":"NISSAN","partName":"Автомагнитола (мультимедийный центр для","priceMin":100994,"priceMax":100994,"userLocationCount":0,"allOffersCount":2,"descriptionIsset":true,"manufacturerId":4,"isDeleted":0},{"partId":"17258723","createdAt":"2020-06-03T05:45:52Z","vendorCode":"A741","brand":"VIC","partName":"Фильтр воздушный","priceMin":827,"priceMax":827,"userLocationCount":1,"allOffersCount":52,"descriptionIsset":true,"manufacturerId":5,"isDeleted":0},{"partId":"16184056","createdAt":"2020-06-03T04:45:58Z","vendorCode":"IFR5N10","brand":"NGK","partName":"Свеча зажигания","priceMin":8,"priceMax":1100,"userLocationCount":0,"allOffersCount":94,"descriptionIsset":true,"manufacturerId":6,"isDeleted":0},{"partId":"12138070","createdAt":"2020-06-03T04:08:47Z","vendorCode":"46272CH001","brand":"NISSAN","partName":"Держатель тормозной трубки","priceMin":404,"priceMax":650,"userLocationCount":0,"allOffersCount":10,"descriptionIsset":true,"manufacturerId":4,"isDeleted":0},{"partId":"16434539","createdAt":"2020-06-02T16:13:36Z","vendorCode":"NST5388L","brand":"KYB","partName":"Стойка газомасляная new sr special kyb (fl)","priceMin":3742,"priceMax":10739,"userLocationCount":0,"allOffersCount":23,"descriptionIsset":true,"manufacturerId":8,"isDeleted":0},{"partId":"16368950","createdAt":"2020-06-02T13:21:27Z","vendorCode":"5611144170","brand":"TOYOTA","partName":"Стекло лобовое","priceMin":34202,"priceMax":37842,"userLocationCount":0,"allOffersCount":3,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"13490912","createdAt":"2020-06-02T12:14:12Z","vendorCode":"MD366568","brand":"MITSUBISHI","partName":"Крышка грм","priceMin":1410,"priceMax":4250,"userLocationCount":0,"allOffersCount":5,"descriptionIsset":true,"manufacturerId":2,"isDeleted":0},{"partId":"15923662","createdAt":"2020-06-02T10:07:20Z","vendorCode":"7461013011A0","brand":"TOYOTA","partName":"Ручка салона","priceMin":803,"priceMax":2627,"userLocationCount":0,"allOffersCount":26,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"16745737","createdAt":"2020-06-02T09:56:35Z","vendorCode":"MR166189","brand":"MITSUBISHI","partName":"Трос_акпп","priceMin":5067,"priceMax":17630,"userLocationCount":0,"allOffersCount":19,"descriptionIsset":true,"manufacturerId":2,"isDeleted":0},{"partId":"11237106","createdAt":"2020-06-02T07:27:13Z","vendorCode":"4851079015","brand":"TOYOTA","partName":"Амортизатор подвески","priceMin":5681,"priceMax":5681,"userLocationCount":0,"allOffersCount":1,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"15789671","createdAt":"2020-06-02T07:17:33Z","vendorCode":"7588360010","brand":"TOYOTA","partName":"Клипса (фиксатор)","priceMin":21,"priceMax":270,"userLocationCount":0,"allOffersCount":63,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"15863961","createdAt":"2020-06-02T05:09:35Z","vendorCode":"ST1539","brand":"GMB","partName":"Крестовина рулевая","priceMin":320,"priceMax":420,"userLocationCount":3,"allOffersCount":200,"descriptionIsset":true,"manufacturerId":15,"isDeleted":0},{"partId":"22885655","createdAt":"2020-06-02T05:03:27Z","vendorCode":"7H0498202A","brand":"VAG","partName":"Пыльник ШРУС [IN]","priceMin":1153,"priceMax":5454,"userLocationCount":0,"allOffersCount":39,"descriptionIsset":true,"manufacturerId":16,"isDeleted":0},{"partId":"11206766","createdAt":"2020-06-02T03:46:24Z","vendorCode":"NSF2101","brand":"KYB","partName":"Амортизатор гм. new sr special nsf2101","priceMin":3274,"priceMax":6540,"userLocationCount":0,"allOffersCount":22,"descriptionIsset":true,"manufacturerId":8,"isDeleted":0},{"partId":"15306708","createdAt":"2020-06-02T03:41:29Z","vendorCode":"1571054030","brand":"TOYOTA","partName":"Радиатор/","priceMin":21304,"priceMax":68160,"userLocationCount":0,"allOffersCount":9,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"2942073","createdAt":"2020-06-02T03:05:01Z","vendorCode":"S157122330","brand":"TOYOTA","partName":"Element oil cooler","priceMin":18735,"priceMax":58920,"userLocationCount":0,"allOffersCount":6,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"12269901","createdAt":"2020-06-02T03:01:22Z","vendorCode":"4261160200","brand":"TOYOTA","partName":"Диск колесный","priceMin":15417,"priceMax":77750,"userLocationCount":0,"allOffersCount":10,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"11295857","createdAt":"2020-06-02T02:47:01Z","vendorCode":"SPR06","brand":"AURAMI","partName":"Ароматизатор спрей 06 новая машина 100мл (aurami)","priceMin":66,"priceMax":240,"userLocationCount":0,"allOffersCount":7,"descriptionIsset":false,"manufacturerId":21,"isDeleted":0},{"partId":"15048492","createdAt":"2020-06-02T02:26:23Z","vendorCode":"2206046010","brand":"TOYOTA","partName":"Датчик дроссельной заслонки","priceMin":12271,"priceMax":38840,"userLocationCount":0,"allOffersCount":11,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"11926878","createdAt":"2020-06-02T01:39:29Z","vendorCode":"AL8Z5230A","brand":"FORD","partName":"Глушитель","priceMin":27008,"priceMax":32973,"userLocationCount":0,"allOffersCount":3,"descriptionIsset":true,"manufacturerId":23,"isDeleted":0},{"partId":"15340930","createdAt":"2020-06-02T01:31:05Z","vendorCode":"TOV485","brand":"AVA QUALITY COOLING","partName":"Радиатор кондиционера внутренний","priceMin":6,"priceMax":7937,"userLocationCount":0,"allOffersCount":77,"descriptionIsset":true,"manufacturerId":24,"isDeleted":0},{"partId":"11260666","createdAt":"2020-06-02T00:04:13Z","vendorCode":"4853180756","brand":"TOYOTA","partName":"Амортизатор подвески задний","priceMin":3864,"priceMax":13880,"userLocationCount":0,"allOffersCount":6,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0}],"type":"success"}');
      ctx.commit('UPDATE_PARTS_LIST', res.data);
      console.log('fetched from server');
      return res.data;
    },
    updatePart(ctx, data) {
      ctx.commit('UPDATE_PART', data);
    },
    changeActiveTab(ctx, value) {
      ctx.commit('CHANGE_ACTIVE_TAB', value);
    },
    setSorting(ctx, value) {
      ctx.commit('SET_SORTING', value);
    },
    setFiltering(ctx, value) {
      ctx.commit('SET_FILTERING', value);
    },
  },
  mutations: {
    UPDATE_PARTS_LIST(state, payload) {
      localStorage.setItem('partsList', JSON.stringify(payload));
      state.partsList = payload;
    },
    UPDATE_PART(state, payload) {
      const mappedParts = state.partsList.map((el) => (
        el.partId === payload.partId ? payload : el
      ));
      localStorage.setItem('partsList', JSON.stringify(mappedParts));
      state.partsList = mappedParts;
    },
    CHANGE_ACTIVE_TAB(state, payload) {
      state.activeTab = payload;
    },
    SET_SORTING(state, payload) {
      localStorage.setItem('listSorting', JSON.stringify(payload));
      state.sorting = payload;
    },
    SET_FILTERING(state, payload) {
      state.filtering = payload;
      localStorage.setItem('listFiltering', JSON.stringify(payload));
    },
  },
  state: {
    defaultSorting: {
      param: 'createdAt',
      desc: true,
    },
    defaultFiltering: {
      vendorCode: null,
      dateFrom: null,
      dateTo: null,
      manufacturerId: null,
    },
    partsList: [],
    activeTab: 'all',
    sorting: {},
    filtering: {},
  },
  getters: {
    partsList(state, getters) {
      const { sorting } = getters;
      return state.partsList.sort((a, b) => {
        if (sorting.desc) {
          return sorting.param === 'createdAt' ? new Date(b[sorting.param]).getTime() - new Date(a[sorting.param]).getTime()
            : b[sorting.param] - a[sorting.param];
        }
        return sorting.param === 'createdAt' ? new Date(a[sorting.param]).getTime() - new Date(b[sorting.param]).getTime()
          : a[sorting.param] - b[sorting.param];
      });
    },
    activeTab(state) {
      return state.activeTab;
    },
    sorting(state) {
      return state.sorting;
    },
    filters(state) {
      return state.filtering;
    },
    defaultFiltering(state) {
      return state.defaultFiltering;
    },
  },
};
