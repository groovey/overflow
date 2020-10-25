<template>
  <input type="checkbox" :class="render" />
</template>

<script>
import { computed } from 'vue'

export default {
  props: {},

  setup (props, context) {
    const tw = {
      base: 'text-primary form-checkbox items-center h-4 w-4 focus:outline-none transition duration-150 ease-in-out',
      custom: props.custom
    }

    const render = computed(() => {
      const ui = [tw.base]
      return ui.join(' ')
    })

    const hasHeader = computed(() => {
      return !!context.slots.header
    })

    return { render, hasHeader }
  }

}
</script>

<style scoped lang="postcss">
</style>
