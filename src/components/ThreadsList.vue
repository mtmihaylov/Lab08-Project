<script setup>
  import { useThreadsListStore } from '../stores/ThreadsList';
  import { storeToRefs } from 'pinia';
  
  import ThreadCard from './ThreadCard.vue'

  const store = useThreadsListStore();
  store.loadThreads();

  const { threadsList } = storeToRefs(store);

</script> 

<template>
  <div class="threads">
    <ThreadCard v-for="(thread, index) in threadsList" :key="index" :thread="thread"/>
  </div>
</template>

<style scoped lang="scss">
  .threads {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 768px;
    min-width: 320px;
    margin: 0 auto;
    margin-top: 20px;
  }
  
</style>