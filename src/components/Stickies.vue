<template>
  <span :class="render">
    <slot></slot>
  </span>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {},

  setup (props, content) {
    const tw = {
      base: 'self-center text-sm text-gray-500 px-2 py-1 shadow-md border border-gray-100'
    }

    const render = computed(() => {
      const ui = [tw.base]

      return ui.join(' ')
    })

    return { render }
  }

}
</script>

<style scoped lang="postcss">
</style>
