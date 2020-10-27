<template>
  <div class="flex flex-row p-4">
    <div class="w-12">
      <x-avatar-me></x-avatar-me>
    </div>
    <div class="bg-gray-100 ml-2 px-4 pt-1 pb-2 rounded-full w-full">
      <input type="text" class="mt-1 bg-gray-100 w-full focus:outline-none focus:shadow-none" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script>
import XAvatarMe from '@/components/facebook/me/Avatar.vue'

export default {
  props: {
    placeholder: String
  },

  components: {
    XAvatarMe
  }

}
</script>

<style scoped>
</style>
