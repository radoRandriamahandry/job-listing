<template>
  <header
    class="h-32 max-w-screen bg-primary"
    style="background-image: url('/src/assets/images/bg-header-desktop.svg')"
  ></header>
  <main class="relative max-w-screen-xl mx-auto">
    <FilterMenu />
    <Cards :jobs="jobs" />
  </main>
</template>

<script>
import state from "../store/state.js"

// components
import Cards from "../components/Cards.vue"
import FilterMenu from "../components/FilterMenu.vue"

export default {
  components: {
    Cards,
    FilterMenu,
  },
  setup() {
    const { jobs } = state()
    return { jobs }
  },
}
</script>

<style></style>
