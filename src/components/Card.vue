<template>
  <div class="bg-white rounded shadow">
    <span v-if="hasHeader" :class="renderHeader">
      <slot name="header"></slot>
    </span>

    <div class="px-4 pb-4 pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    color: {
      type: String,
      required: false
    },
    custom: String,
    border: Boolean

  },

  setup (props, context) {
    const tw = {
      header: 'px-4 py-3 block font-bold text-sm uppercase tracking-widest text-primary',
      border: 'border-b border-gray-100',
      custom: props.custom
    }

    const render = computed(() => {
      const ui = [tw.base]

      ui.push(tw.base)

      return ui.join(' ')
    })

    const hasHeader = computed(() => {
      return !!context.slots.header
    })

    const renderHeader = computed(() => {
      var ui = []
      if (props.border) ui.push(tw.border)
      ui.push(tw.header)

      return ui.join(' ')
    })

    return { render, hasHeader, renderHeader }
  }

}
</script>

<style scoped lang="postcss">
</style>
