<template>
  <div class="flex flex-row p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
    <div class="text-center">
      <x-avatar :image="image"></x-avatar>
    </div>
    <div class="flex flex-col ml-2 mt-2">
      <div class="text-sm font-semibold">{{ text }}</div>
    </div>
  </div>
</template>

<script>
import XAvatar from '@/components/Avatar.vue'
export default {
  props: {
    text: String,
    image: String
  },
  components: {
    XAvatar
  }

}
</script>

<style>
</style>
