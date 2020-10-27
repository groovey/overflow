<template>
  <div class="flex p-4">
    <div class="flex-row w-3/4">
      <div class="flex flex-row">
        <div class="text-center">
          <x-avatar-me></x-avatar-me>
        </div>
        <div class="flex flex-col ml-2">
          <div class="text-sm font-bold">{{ author }}</div>
          <div>{{ origin }}</div>
        </div>
      </div>
    </div>
    <div class="flex-row w-1/4 text-right">...</div>
  </div>
</template>

<script>
import XAvatarMe from '@/components/facebook/me/Avatar.vue'

export default {
  props: {
    author: String,
    origin: String
  },

  components: {
    XAvatarMe
  }

}
</script>

<style scoped>
</style>
