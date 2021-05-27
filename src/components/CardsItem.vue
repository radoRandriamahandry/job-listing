<template>
  <div
    class="relative grid w-full px-4 mx-auto mt-5 transition-all duration-100 ease-in transform bg-white border-transparent rounded-md shadow-md  lg:mt-0 sm:border-l-4 lg:px-8 lg:grid-rows-none lg:grid-cols-2 py-7 hover:-translate-y-1 hover:shadow-xl hover:border-primary"
  >
    <!-- Only on small screen -->
    <div class="absolute w-auto h-12 left-4 -top-6 md:h-14 md:-top-7 lg:hidden">
      <img class="h-full" :src="job.logo" />
    </div>
    <!-- end -->
    <div class="flex mt-2 lg:gap-7 md:mt-4 lg:mt-0">
      <div class="hidden w-auto h-20 lg:block">
        <img class="h-full" :src="job.logo" />
      </div>
      <div class="grid gap-4 lg:gap-2">
        <div class="flex items-center gap-4">
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
        <div class="font-bold text-md lg:text-md">{{ job.position }}</div>
        <div class="flex space-x-4 text-sm text-gray-400">
          <span>{{ job.postedAt }}</span>
          <span>{{ job.contract }}</span>
          <span>{{ job.location }}</span>
        </div>
      </div>
    </div>
    <!-- Only show on small screen -->
    <div class="w-full h-px my-5 bg-gray-300 lg:hidden"></div>
    <!-- Filters -->
    <div
      class="flex flex-wrap items-center gap-4 py-1 text-sm font-semibold  lg:gap-3 lg:px-2 lg:justify-end text-primary"
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
