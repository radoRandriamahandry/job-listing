<template>
  <div class="mt-24">
    <div class="grid gap-6">
      <div v-for="job in jobs" :key="job.id">
        <CardsItem :job="job" />
      </div>
    </div>
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

<style></style>
