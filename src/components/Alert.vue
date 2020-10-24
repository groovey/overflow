<template>
  <div :class="render('base')">
    <span :class="render('header')">
      <slot name="header"></slot>
    </span>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
// import { computed } from 'vue'

export default {
  props: {
    color: {
      type: String,
      required: false
    }
  },

  setup (props, content) {
    const tw = {
      success: {
        base: 'mb-4 px-4 py-3 rounded shadow bg-green-100',
        header: 'pb-1 block border-b mb-1 font-bold uppercase tracking-widest border-green-200 text-green-500'
      },
      info: {
        base: 'mb-4 px-4 py-3 rounded shadow bg-yellow-50',
        header: 'pb-1 block border-b mb-1 font-bold uppercase tracking-widest border-yellow-200 text-yellow-400'
      },
      error: {
        base: 'mb-4 px-4 py-3 rounded shadow bg-red-100',
        header: 'pb-1 block border-b mb-1 font-bold uppercase tracking-widest border-red-200 text-red-500'
      }
    }

    function render (type) {
      return tw[props.color][type]
    }

    return { tw, render }
  }

}
</script>

<style scoped lang="postcss">
</style>
