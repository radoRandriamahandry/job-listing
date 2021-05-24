import { computed, reactive, ref } from "@vue/runtime-core"
import data from "../assets/data.json"

// Helper functions
import { testFilter, checkCriteria } from "./helper.js"

const importedData = ref(data)
const hasFilters = ref(false)

const filters = reactive({
  role: "",
  level: "",
  languages: [],
  tools: [],
})

/**
 * @brief Update the filters value in order to update the job list
 *
 * @param {string} key
 * @param {string} value
 */
export const updateFilters = (key, value) => {
  console.log("run updateFilters")
  if (typeof filters[key] === "object") {
    filters[key].push(value)
  } else {
    filters[key] = value
  }
  hasFilters.value = ref(testFilter(filters))
}

export const state = computed(() => {
  hasFilters.value = ref(testFilter(filters))

  if (!hasFilters.value) {
    return importedData.value.map((item) => {
      return item
    })
  } else {
    return importedData.value.filter((item) => {
      return checkCriteria(item, filters)
    })
  }
})
