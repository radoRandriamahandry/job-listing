import { computed, ref } from "@vue/runtime-core"
import data from "../assets/data.json"

const importedData = ref(data)

const state = computed(() => {
  return importedData.map((item) => {
    return item
  })
})

export default state
