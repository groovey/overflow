<template>
  <div class="relative mt-0 mb-2" style="width: 140px">
    <div class="bg-green-300" style="width: 130px">
      <x-button color="primary" small class="w-full inline-flex items-center">
        <svg fill="#fff" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
        </svg>

        <span class="ml-2">Upload File</span>
      </x-button>
      <input class="cursor-pointer absolute block py-2 px-2 w-full opacity-0 bg-green-200 -mt-10" type="file" accept="image/*" />
    </div>
  </div>
</template>

<script>
import XButton from '@/components/Button.vue'

export default {
  props: {
    color: {
      type: String,
      required: false
    },
    custom: String

  },

  components: {
    XButton
  },

  setup (props, context) {
    return { }
  }

}
</script>

<style scoped lang="postcss">
</style>
