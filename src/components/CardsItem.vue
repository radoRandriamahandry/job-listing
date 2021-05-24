<template>
  <div
    class="grid grid-cols-2 px-8 transition-all duration-100 ease-in transform bg-white border-l-4 border-transparent rounded-lg shadow-lg  py-7 hover:-translate-y-1 hover:shadow-xl hover:border-primary"
  >
    <div class="flex items-center space-x-5">
      <div class="w-auto h-20">
        <img class="h-full" :src="data.logo" />
      </div>
      <div class="grid gap-2">
        <div class="flex items-center space-x-4">
          <h3 class="text-sm font-semibold text-primary">{{ data.company }}</h3>
          <div
            v-if="data.new"
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
            v-if="data.featured"
            class="px-2 py-1 text-xs font-semibold text-gray-200 uppercase bg-gray-600 rounded-full "
          >
            featured
          </div>
        </div>
        <div class="text-lg font-bold">{{ data.position }}</div>
        <div class="flex space-x-4 text-sm text-gray-400">
          <span>{{ data.postedAt }}</span>
          <span>{{ data.contract }}</span>
          <span>{{ data.location }}</span>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-end px-2 py-1 space-x-3 text-sm font-semibold  text-primary"
    >
      <span
        class="px-2 py-1 rounded-md cursor-pointer  bg-neutral-bg hover:bg-primary hover:text-white"
        >{{ data.role }}</span
      >
      <span
        class="px-2 py-1 rounded-md cursor-pointer  bg-neutral-bg hover:bg-primary hover:text-white"
        >{{ data.level }}</span
      >
      <span
        v-for="language in data.languages"
        :key="language"
        class="px-2 py-1 rounded-md cursor-pointer  bg-neutral-bg hover:bg-primary hover:text-white"
        >{{ language }}</span
      >
      <span
        v-for="tool in data.tools"
        :key="tool"
        class="px-2 py-1 rounded-md cursor-pointer  bg-neutral-bg hover:bg-primary hover:text-white"
        >{{ tool }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
