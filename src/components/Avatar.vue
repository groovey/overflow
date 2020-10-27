<template>
  <span>
    <span v-if="isType('text')" :class="renderText">{{ text }} </span>
    <img v-else-if="isType('image')" :class="renderImage" :src="image" />
  </span>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    size: Number,
    text: String,
    image: String
  },

  setup (props, content) {
    const tw = {
      text: 'inline-block align-middle h-10 w-10 pt-2 rounded-full text-white bg-primary shadow-solid text-center',
      image: 'inline-block h-10 w-10 rounded-full text-white shadow-solid'
    }

    function isType (type) {
      var expected

      if (props.text) {
        expected = 'text'
      } else if (props.image) {
        expected = 'image'
      }

      if (type === expected) {
        return true
      }
    }

    const renderText = computed(() => {
      return tw.text
    })
    const renderImage = computed(() => {
      return tw.image
    })

    return { isType, renderText, renderImage }
  }

}
</script>

<style scoped lang="postcss">
</style>
