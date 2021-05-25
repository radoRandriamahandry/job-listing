<template>
  <transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="transform scale-50 opacity-0"
    leave-active-class="duration-300 ease-in"
    leave-to-class="transform scale-50 opacity-0"
  >
    <div v-if="hasFilters" class="relative h-px max-w-screen-xl">
      <div
        class="absolute flex justify-between w-full py-6 bg-white rounded-lg shadow-xl  px-14 -top-10"
      >
        <!-- list of filter here -->
        <transition-group
          enter-active-class="duration-150 ease-out"
          enter-from-class="transform scale-50 opacity-0"
          leave-active-class="absolute duration-150 ease-in"
          leave-to-class="transform scale-50 opacity-0"
          move-class="duration-150 ease-out transform"
          tag="div"
          class="flex space-x-4"
        >
          <div
            v-for="filter in filtersList"
            :key="filter.value"
            class="flex items-center overflow-hidden rounded-md"
          >
            <span class="px-3 py-1 text-sm text-primary bg-neutral-bg">{{
              filter.value
            }}</span>
            <button
              class="flex items-center h-full px-1 text-white  bg-primary hover:bg-gray-800"
              @click="removeFilters(filter.key, filter.value)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </transition-group>
        <button class="text-primary hover:underline" @click="clearFilters">
          Clear
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { computed } from "@vue/runtime-core"
import state from "../store/state.js"

export default {
  setup() {
    const { hasFilters, clearFilters, filters, removeFilters } = state()

    // create a computed property for cycle through the filters
    const filtersList = computed(() => {
      const keys = Object.keys(filters)
      // use map object
      let tempList = []

      keys.forEach((key) => {
        // should externalize this function (test)
        if (typeof filters[key] === "object") {
          if (filters[key].length) {
            filters[key].forEach((value) => {
              tempList.push({ key: key, value: value })
            })
          }
        }

        if (typeof filters[key] === "string") {
          if (filters[key]) {
            tempList.push({ key: key, value: filters[key] })
          }
        }
      })

      return tempList
    })

    return { hasFilters, clearFilters, filtersList, removeFilters }
  },
}
</script>

<style></style>
