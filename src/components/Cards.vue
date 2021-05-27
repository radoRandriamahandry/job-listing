<template>
  <div class="relative max-w-xs mx-auto mt-16 lg:mt-24 sm:mx-0">
    <transition-group
      enter-active-class="duration-200 ease-out"
      enter-from-class="transform opacity-0"
      leave-active-class="absolute duration-100"
      leave-to-class="transform opacity-0"
      move-class="duration-500 ease-out transform"
      tag="div"
      class="grid gap-6"
    >
      <div v-for="job in jobs" :key="job.id">
        <CardsItem :job="job" />
      </div>
    </transition-group>
  </div>
</template>

<script>
// components
import CardsItem from "../components/CardsItem.vue"
export default {
  components: {
    CardsItem,
  },
  props: {
    jobs: {
      type: Array,
      required: true,
    },
  },
  setup() {},
}
</script>
