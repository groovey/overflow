<template>
  <h1 :class="render">
    <slot></slot>
  </h1>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },

  setup (props, content) {
    const tw = {
      h1: 'text-2xl leading-5 font-extrabold text-gray-500',
      h2: 'text-xl leading-5 font-extrabold text-gray-500',
      h3: 'text-lg leading-5 font-extrabold text-gray-500'
    }

    const render = computed(() => {
      var ui = []

      if (props.type === '1') ui.push(tw.h1)
      if (props.type === '2') ui.push(tw.h2)
      if (props.type === '3') ui.push(tw.h3)

      return ui.join(' ')
    })

    return { render }
  }
}
</script>

<style scoped lang="postcss">
</style>
