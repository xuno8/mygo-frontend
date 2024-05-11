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
  },
  actions: {
    fetchSearchResults({ commit }, query) {
      axios
        .post("https://mygowebapp.azurewebsites.net/search", {
          query: query,
        })
        .then((response) => {
          //   console.log(response.data);
          commit("setSearchResults", response.data);
        })
        .catch((error) => {
          console.error("Search failed:", error);
          //   alert("ERROR!!!!!");
        });
    },
  },
});
