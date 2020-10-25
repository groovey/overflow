<template>
  <textarea :class="render"></textarea>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {},

  setup (props) {
    const tw = {
      base: 'border px-3 py-2 w-full h-20 rounded-sm focus:outline-none'
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
