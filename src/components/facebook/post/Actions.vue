<template>
  <div class="p-4">
    <div class="flex flex-row pt-1 pb-2">
      <div class="w-3/4 flex flex-row">
        <div class="">
          <x-emoticon icon="laugh"></x-emoticon>
        </div>
        <div class="ml-2">{{ likes }}</div>
      </div>
      <div class="w-1/4 text-right">
        <a href="#" class="hover:underline">{{ comments }} Comments</a>
      </div>
    </div>

    <hr />

    <div class="flex flex-row text-center p-1">
      <div class="w-1/3">Like</div>
      <div class="w-1/3">Comment</div>
      <div class="w-1/3">Share</div>
    </div>

    <hr />

    <div class="p-2 hover:underline">View {{ more }} more comments</div>
  </div>
</template>

<script>
import XEmoticon from '@/components/Emoticon.vue'

export default {
  props: {
    likes: Number,
    comments: Number,
    more: Number
  },

  components: {
    XEmoticon
  },

  setup (props) {
    return { }
  }

}
</script>

<style scoped>
</style>
