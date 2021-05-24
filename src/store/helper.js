/**
 * Return true if the the filtered list object has filter value in it
 *
 * @param {Object} filtersList
 * @return {boolean}
 */
export const testFilter = (filtersList) => {
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

/**
 * Return true if the arrayToCheck contains all of the items inside of the arrayFitler
 *
 * @param {string} arrayToCheck
 * @param {string} arrayFilter
 * @return {boolean}
 */
export const hasEveryItem = (arrayToCheck, arrayFilter) => {
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
export const checkCriteria = (objectToFilter, filtersList) => {
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

// Create a function that edit the filtes object
// params : filters argument and value as an object
export const updateFilters = (filters, key, value) => {
  // new Value should be an object
  // Test if filters.key is not an object

  if (typeof filters[key] === "object") {
    filters[key].push(value)
  } else {
    filters[key] = value
  }
}
