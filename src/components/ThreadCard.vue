<script setup>
  const props = defineProps({
    thread: {
      type: Array,
      required: true
    }
  })

</script>

<template>
  <div class="thread-card">
    <div class="thread-card__info">
      <h5 class="thread-card__subject">
        {{ thread[0].subject }}
      </h5>
      <p class="thread-card__question">
        {{ thread[0].question }}
      </p>
      <p class="thread-card__text">
        {{ thread[0].text }}
      </p>
    </div>
    <div class="thread-card__team">
      <p class="thread-card__team-name">
        {{ thread[0].team }}
      </p>
      <p class="thread-card__created-at">
        {{ thread[0].created_at }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  
</style>