<template>
  <div class="pt-20 px-14">
    <div class="grid gap-6">
      <div v-for="data in state" :key="data.id">
        <CardsItem :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue"
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
  setup(props) {
    // create filter by role, level, languages [], tools []
    // by if empty then show all

    // update the filter here

    const filteredSate = computed(() => {
      // first try if none of them is true
      if (
        !roleFilter.value &&
        !levelFilter.value &&
        !languagesFilter.value &&
        !toolsFilter.value
      ) {
        return props.state.map((item) => {
          return item
        })
      } else {
        return false
      }
    })

    return { filteredSate }
  },
}
</script>

<style></style>
