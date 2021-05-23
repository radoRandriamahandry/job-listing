<template>
  <header
    class="h-32 max-w-screen bg-primary"
    style="background-image: url('/src/assets/images/bg-header-desktop.svg')"
  ></header>
  <main class="max-w-screen-xl mx-auto">
    <Cards :state="state" />
  </main>
</template>

<script>
import { state, hasFilters } from "../store/state.js"

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
