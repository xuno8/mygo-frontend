import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchResults: [],
  },
  mutations: {
    setSearchResults(state, results) {
      state.searchResults = results;
    },
    setCurrentSearchQuery(state, query) {
      state.currentSearchQuery = query;
    },
  },
  actions: {
    fetchSearchResults({ commit }, query) {
      commit("setCurrentSearchQuery", query);
      axios
        .post("https://mygowebapp.azurewebsites.net/search", {
          query: query,
        })
        .then((response) => {
          console.log(response.data);
          commit("setSearchResults", response.data);
        })
        .catch((error) => {
          console.error("Search failed:", error);
          //   alert("ERROR!!!!!");
        });
    },
  },
});
