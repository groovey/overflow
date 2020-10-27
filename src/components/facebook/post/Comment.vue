<template>
  <div class="px-4 py-1 flex flex-row">
    <div class="">
      <x-avatar :image="avatar"></x-avatar>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col bg-gray-100 ml-2 px-4 pt-1 pb-2 rounded-full">
        <div class="text-sm font-bold">{{ author }}</div>
        <div>{{ message }}</div>
      </div>
      <div class="ml-6 text-xs font-semibold">Like &nbsp; Reply</div>
    </div>
  </div>
</template>

<script>
import XAvatar from '@/components/Avatar.vue'

export default {
  props: {
    avatar: String,
    author: String,
    message: String
  },

  components: {
    XAvatar
  },

  setup (props) {
    return { }
  }

}
</script>

<style scoped>
</style>
