<template>
  <div class="max-w-screen-xl mx-auto">
    <h1 class="text-xl font-bold">Home page</h1>
    <Cards :state="state" />
  </div>
</template>

<script>
import state from "../assets/data.json"

// components
import Cards from "../components/Cards.vue"

export default {
  components: {
    Cards,
  },
  setup() {
    return { state }
  },
}
</script>

<style></style>
