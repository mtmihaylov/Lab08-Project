<script setup>
  import { useThreadsListStore } from '../stores/ThreadsList';
  import { storeToRefs } from 'pinia';
  import ThreadCards from './ThreadCards.vue'

  const store = useThreadsListStore();  
  const { threadsList } = storeToRefs(store);

  store.loadThreads();
</script> 

<template>
  <div class="threads">
    <ThreadCards v-for="(thread, index) in threadsList" :key="index" :thread="thread"/>
  </div>
</template>

<style scoped lang="scss">
  .threads {
    padding: 20px 30px;
    // overflow-x: hidden;
  }
</style>