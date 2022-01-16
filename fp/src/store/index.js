import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
    addPaymentListData(state, payload) {
      state.paymentsList.push(payload);
    },
    editPaymentListFirstElement(state, payload) {
      // state.paymentsList[0] = payload
      Vue.set(state.paymentsList, 0, payload);
      // OR
      state.paymentsList[0] = payload;
      state.paymentsList = [...state.paymentsList];
    },
    setCategoryData(state, payload) {
      state.categoryList = payload;
    },
  },
  getters: {
    getPaymentsListFullValuePrice: (state) => {
      return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0);
    },
    getPaymentsList: (state) =>
      state.paymentsList?.length ? state.paymentsList : [],
    getCategoryList: state => state.categoryList,
  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          const dataBase = {
            "page1": [
              { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
              { "id": 2, "date": "21.03.2020", "category": "Internet", "value": 50 },
              { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 },
              { "id": 4, "date": "23.03.2020", "category": "Sport", "value": 750 },
              { "id": 5, "date": "24.03.2020", "category": "Sport", "value": 1450 }
            ],
            "page2": [
              { "id": 6, "date": "25.03.2020", "category": "Entertaiment", "value": 969 },
              { "id": 7, "date": "26.03.2020", "category": "Education", "value": 1500 },
              { "id": 8, "date": "27.03.2020", "category": "Food", "value": 20 },
              { "id": 9, "date": "28.03.2020", "category": "Food", "value": 2000 },
              { "id": 10, "date": "29.03.2020", "category": "Food", "value": 8 }
            ],
            "page3": [
              { "id": 11, "date": "30.03.2020", "category": "Entertaiment", "value": 969 },
              { "id": 12, "date": "31.03.2020", "category": "Education", "value": 1500 },
              { "id": 13, "date": "01.04.2020", "category": "Food", "value": 20 },
              { "id": 14, "date": "02.04.2020", "category": "Food", "value": 2000 },
              { "id": 15, "date": "03.04.2020", "category": "Food", "value": 8 }
            ],
          };
          for(let page in dataBase) {
            for(let i = 0; i < dataBase[page].length; i++) {
              items.push(dataBase[page][i]);
            }
          }
          resolve(items);
        }, 0);
      }).then((res) => commit("setPaymentsListData", res));
    },
    fetchCategory({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = ["Sport", "Education", "Internet", "Food", "Transport", "Entertainment"];
          resolve(items);
        }, 0);
      }).then((res) => commit("setCategoryData", res));
    },
  },
});