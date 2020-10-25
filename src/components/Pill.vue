<template>
  <span :class="render">
    <slot></slot>
  </span>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    color: String,
    outline: Boolean,
    size: String,
    disabled: Boolean,
    custom: String
  },

  setup (props, content) {
    const tw = {
      base: 'inline-block rounded-full border text-xs lowercase font-semibold',
      primary: {
        solid: 'bg-primary border-primary border text-white',
        outline: 'text-primary border-primary'
      },
      secondary: {
        solid: 'bg-secondary border-secondary border text-white',
        outline: 'text-secondary border-secondary'
      },
      success: {
        solid: 'bg-success border-success border text-white',
        outline: 'text-success border-success'
      },
      danger: {
        solid: 'bg-danger border-danger border text-white',
        outline: 'text-danger border-danger'
      },
      warning: {
        solid: 'bg-warning border-warning border text-white',
        outline: 'text-warning border-warning'
      },
      xsmall: 'px-2 py-1 text-xs',
      small: 'px-2 py-1 text-sm',
      medium: 'px-2 py-1 text-base',
      large: 'px-4 py-2 text-lg',
      xlarge: 'px-4 py-2 text-xl',
      block: 'block w-full',

      disabled: 'disabled:opacity-75',
      custom: props.custom
    }

    function type (tw) {
      if (props.outline) {
        return tw.outline
      }
      return tw.solid
    }

    const render = computed(() => {
      const ui = [tw.base]

      switch (props.color) {
        case 'primary':
        default:
          ui.push(type(tw.primary))
          break
        case 'secondary':
          ui.push(type(tw.secondary))
          break
        case 'success':
          ui.push(type(tw.success))
          break
        case 'danger':
          ui.push(type(tw.danger))
          break
        case 'warning':
          ui.push(type(tw.warning))
          break
      }

      if (props.block) { ui.push(tw.block) }

      if (props.size === undefined) {
        ui.push(tw.small)
      } else {
        ui.push(tw[props.size])
      }

      return ui.join(' ')
    })

    const isDisabled = computed(() => {
      if (props.disabled === true) {
        return tw.disabled
      }
    })

    return { render, isDisabled }
  }

}
</script>

<style scoped lang="postcss">
</style>
