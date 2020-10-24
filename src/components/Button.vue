<template>
  <button :class="render" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    color: String,
    outline: Boolean,
    small: Boolean,
    medium: Boolean,
    large: Boolean,
    xlarge: Boolean,
    disabled: Boolean,
    block: Boolean,
    custom: String
  },

  setup (props, content) {
    const tw = {
      base: 'inline-block rounded font-semibold transition duration-300 ease-in-out cursor-pointer focus:outline-none focus:shadow-outline',
      primary: {
        solid: 'bg-primary border-primary border text-white hover:bg-primary-dark',
        outline: 'text-primary border-primary border hover:bg-primary-dark hover:text-white'
      },
      secondary: {
        solid: 'bg-secondary border-secondary border text-white hover:bg-secondary-dark',
        outline: 'text-secondary border-secondary border hover:bg-secondary-dark hover:text-white'
      },
      success: {
        solid: 'bg-success border-success border text-white hover:bg-success-dark',
        outline: 'text-success border-success border hover:bg-success-dark hover:text-white'
      },
      danger: {
        solid: 'bg-danger border-danger border text-white hover:bg-danger-dark',
        outline: 'text-danger border-danger border hover:bg-danger-dark hover:text-white'
      },
      warning: {
        solid: 'bg-warning border-warning border text-white hover:bg-warning-dark',
        outline: 'text-warning border-warning border hover:bg-warning-dark hover:text-white'
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

      if (props.xsmall) { ui.push(tw.xsmall) }
      if (props.small) { ui.push(tw.small) }
      if (props.medium) { ui.push(tw.medium) }
      if (props.large) { ui.push(tw.large) }
      if (props.xlarge) { ui.push(tw.xlarge) }

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
