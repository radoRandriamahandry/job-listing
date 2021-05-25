<template>
  <div
    class="grid grid-cols-2 px-8 transition-all duration-100 ease-in transform bg-white border-l-4 border-transparent rounded-lg shadow-lg  py-7 hover:-translate-y-1 hover:shadow-xl hover:border-primary"
  >
    <div class="flex items-center space-x-5">
      <div class="w-auto h-20">
        <img class="h-full" :src="job.logo" />
      </div>
      <div class="grid gap-2">
        <div class="flex items-center space-x-4">
          <h3 class="text-sm font-semibold text-primary">
            {{ job.company }}
          </h3>
          <div
            v-if="job.new"
            class="
              px-2
              py-[0.30rem]
              text-xs
              font-semibold
              text-white
              uppercase
              rounded-full
              bg-primary
            "
          >
            new !
          </div>
          <div
            v-if="job.featured"
            class="px-2 py-1 text-xs font-semibold text-gray-200 uppercase bg-gray-600 rounded-full "
          >
            featured
          </div>
        </div>
        <div class="text-lg font-bold">{{ job.position }}</div>
        <div class="flex space-x-4 text-sm text-gray-400">
          <span>{{ job.postedAt }}</span>
          <span>{{ job.contract }}</span>
          <span>{{ job.location }}</span>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-end px-2 py-1 space-x-3 text-sm font-semibold  text-primary"
    >
      <span class="filters" @click="addFilters('role', job.role)">{{
        job.role
      }}</span>
      <span class="filters" @click="addFilters('level', job.level)">{{
        job.level
      }}</span>
      <span
        v-for="language in job.languages"
        :key="language"
        class="filters"
        @click="addFilters('languages', language)"
        >{{ language }}</span
      >
      <span
        v-for="tool in job.tools"
        :key="tool"
        class="filters"
        @click="addFilters('tools', tool)"
        >{{ tool }}
      </span>
    </div>
  </div>
</template>

<script>
import state from "../store/state.js"
export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { addFilters } = state()

    return { addFilters }
  },
}
</script>
