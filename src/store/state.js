import { computed, reactive, ref } from "@vue/runtime-core"
import data from "../assets/data.json"

// Helper functions
import { testFilter, checkCriteria } from "./helper.js"

const importedData = ref(data)

const filters = reactive({
  role: "",
  level: "",
  languages: [],
  tools: [],
})

const hasFilters = computed(() => {
  return testFilter(filters)
})

/**
 * @brief Update the filters value in order to update the job list
 *
 * @param {string} key
 * @param {string} value
 */
const addFilters = (key, value) => {
  if (typeof filters[key] === "object") {
    if (!filters[key].includes(value)) {
      filters[key].push(value)
    }
  } else {
    filters[key] = value
  }
}

const removeFilters = (key, value) => {
  if (typeof filters[key] === "object") {
    filters[key] = filters[key].filter((item) => {
      return item !== value
    })
  } else {
    filters[key] = ""
  }
}

const clearFilters = () => {
  filters.role = ""
  filters.level = ""
  filters.languages = []
  filters.tools = []
}

const jobs = computed(() => {
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

const state = () => {
  return {
    jobs,
    hasFilters,
    filters,
    addFilters,
    clearFilters,
    removeFilters,
  }
}

export default state
