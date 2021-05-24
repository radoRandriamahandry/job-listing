import { computed, reactive, ref } from "@vue/runtime-core"
import data from "../assets/data.json"

// Helper functions
import { testFilter, checkCriteria, updateFilters } from "./helper.js"

const importedData = ref(data)

const filters = reactive({
  role: "",
  level: "",
  languages: [],
  tools: [],
})

updateFilters(filters, "languages", "JavaScript")
updateFilters(filters, "languages", "CSS")

export const hasFilters = ref(testFilter(filters))

export const state = computed(() => {
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
