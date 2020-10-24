<template>
  <span :class="render"></span>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    color: {
      type: String,
      required: false
    },
    custom: String
  },

  setup (props, content) {
    const tw = {
      base: 'mt-1 inline-block self-center rounded-full h-3 w-3 items-center bg-primary',
      custom: props.custom
    }

    const render = computed(() => {
      const ui = [tw.base]

      ui.push(tw.base)
      ui.push('bg-' + props.color)

      return ui.join(' ')
    })

    return { render }
  }

}
</script>

<style scoped lang="postcss">
</style>
