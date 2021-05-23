import { computed, reactive, ref } from "@vue/runtime-core"
import data from "../assets/data.json"

const importedData = ref(data)

const filters = reactive({
  role: "",
  level: "Junior",
  languages: [],
  tools: [],
})

/**
 * Return true if the the filtered list object has filter value in it
 *
 * @param {Object} filtersList
 * @return {boolean}
 */
const testFilter = (filtersList) => {
  const keys = Object.keys(filtersList)
  let testResult = false
  keys.forEach((item) => {
    if (typeof filtersList[item] === "string") {
      if (filtersList[item]) {
        testResult = true
      }
    }
    if (typeof filtersList[item] === "object") {
      if (filtersList[item].length) {
        testResult = true
      }
    }
  })

  return testResult
}

export const hasFilters = ref(testFilter(filters))

/**
 * Return true if the arrayToCheck contains all of the items inside of the arrayFitler
 *
 * @param {string} arrayToCheck
 * @param {string} arrayFilter
 * @return {boolean}
 */
const hasEveryItem = (arrayToCheck, arrayFilter) => {
  return arrayFilter.every((item) => {
    return arrayToCheck.includes(item)
  })
}

/**
 * Return true if all of the filter criteria in filtersList are meet in the ObjecToFilter object
 *
 * @param {object} objectToFilter
 * @param {object} filtersList
 * @return {boolean}
 */
const checkCriteria = (objectToFilter, filtersList) => {
  let meetCriteria = true
  const keys = Object.keys(filtersList)

  keys.forEach((key) => {
    const filter = filtersList[key]
    const sourceObject = objectToFilter[key]

    if (typeof filter === "object") {
      if (filter.length && !hasEveryItem(sourceObject, filter)) {
        meetCriteria = false
      }
    }

    if (typeof filter === "string") {
      if (filter && sourceObject !== filter) {
        meetCriteria = false
      }
    }
  })

  return meetCriteria
}

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
