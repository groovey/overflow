<template>
  <input :type="type" :class="render" />
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    type: String
  },

  setup (props) {
    const tw = {
      input: {
        base: 'border p-2 rounded focus:outline-none'
      },
      radio: {
        base: 'form-radio text-primary h-4 w-4 focus:outline-none transition duration-150 ease-in-out'
      },
      checkbox: {
        base: 'form-checkbox text-primary h-4 w-4 focus:outline-none transition duration-150 ease-in-out'
      },
      custom: props.custom
    }

    const render = computed(() => {
      const ui = [tw.base]

      switch (props.type) {
        case 'radio' :
          ui.push(tw.radio.base)
          break
        case 'checkbox' :
          ui.push(tw.checkbox.base)
          break
        default:
        case 'input':
          ui.push(tw.input.base)
          break
      }

      return ui.join(' ')
    })

    return { render }
  }

}
</script>

<style scoped lang="postcss">
</style>
