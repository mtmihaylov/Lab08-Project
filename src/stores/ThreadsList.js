import { defineStore } from "pinia";
import { getThreads } from "../services/EventService";

export const useThreadsListStore = defineStore("ThreadsList", {
  state: () => ({
    threadsList: [],
  }),
  actions: {
    async loadThreads() {
      const { data } = await getThreads();
      this.threadsList = data;
    },
  },
});
