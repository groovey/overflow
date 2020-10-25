<template>
  <select :class="render">
    <slot></slot>
  </select>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {},

  setup (props, content) {
    const tw = {
      base: 'form-select pb-3 border-gray-300 text-sm block appearance-none w-full bg-white border rounded-sm leading-tight focus:outline-none'
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
