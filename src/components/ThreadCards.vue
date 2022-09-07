<script setup>
  import getOrdinalNum from '@/utils/dateOrdinal'
  import toMonthName from '@/utils/toMonthName'
  import { ref, computed } from 'vue'

  const { thread } = defineProps({
    thread: {
      type: Array,
      required: true
    }
  })

  const isCollapsed = ref(true);

  const cardsToShow = computed(() => {
    return isCollapsed.value ? [thread[0]] : thread;
  })

  const threadClasses = ref({
    'thread-card--has-two-entries': thread.length > 1 && isCollapsed,
    'thread-card--has-three-entries': thread.length > 2 && isCollapsed
  })

  const getDate = (entry) => {
    const parsedDate = new Date(entry.created_at);
    const month = toMonthName(parsedDate.getMonth());
    const day = getOrdinalNum(parsedDate.getDate());
    return `${month} ${day}`;
  }

  const getSubjectColor = (entry) => (entry.score >= 6 ? '#9335ff' : '#e89d40');

  const getBannerColor = () => {
    if (thread.length === 2) return '#e89d40';
    else if (thread.length === 3) return '#27aae1';
  }
</script>

<template>
  <TransitionGroup name="list">
    <section 
      v-for="entry in cardsToShow"
      :key="entry.id" 
      :class="['thread-card', threadClasses]" 
      @click.once="isCollapsed = false"
    >
      <span 
        v-if="thread.length > 1 && isCollapsed" 
        :style="{ backgroundColor: getBannerColor()}"
        class="thread-card__banner"
      >
        {{ thread.length }} messages
      </span>
      <div class="thread-card__info">
        <h5 :style="{ color: getSubjectColor(entry)}" class="thread-card__subject">
          {{ entry.subject }}
        </h5>
        <p class="thread-card__question">
          {{ entry.question }}
        </p>
        <p class="thread-card__text">
          {{ entry.text }}
        </p>
      </div>
      <div class="thread-card__team">
        <p class="thread-card__team-name">
          {{ entry.team }}
        </p>
        <p class="thread-card__created-at">
          {{ getDate(entry) }}
        </p>
      </div>
    </section>
  </TransitionGroup>
</template>

<style scoped lang="scss">
@mixin thread-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 2px rgba(#000000, 0.07)
}
.thread-card {
  @include thread-card;

  display: flex;
  justify-content: space-between;
  padding: 25px;
  position: relative;
  max-width: 768px;
  min-width: 320px;
  width: 100%;
  margin: 40px auto;
  color: #999999;

  &__banner {
    position: absolute;
    font-size: 12px;
    color: white;
    top: -7px;
    right: 20px;
    width: 120px;
    text-align: center;
    border-radius: 8px;
    padding: 1px;
  }

  &--has-two-entries::before {
    @include thread-card;

    content: '';
    top: 10px;
    left: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &--has-three-entries::after {
    @include thread-card;

    content: '';
    top: 20px;
    left: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
  }
  
  &__team {
    align-items:flex-end;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  &__subject {
    font-size: 14px;
  }

  &__question {
    font-size: 12px;
  }
  
  &__text {
    margin-top: 10px;
    font-size: 14px;
    min-width: 100px;
  }

  &__team-name {
    font-size: 12px;
  }

  &__created-at {
    font-size: 10px;
  }
}
</style>