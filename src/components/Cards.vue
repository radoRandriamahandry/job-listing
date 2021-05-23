<template>
  <div class="mt-10 px-14">
    <div class="grid gap-6">
      <div v-for="data in state" :key="data.id">
        <CardsItem :data="data" />
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
    state: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
