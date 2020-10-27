<template>
  <div class="px-4 pt-1 pb-2" v-html="process"></div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    text: String
  },

  components: {
  },

  setup (props) {
    const process = computed(() => {
      var value = props.text
      if (!value) return ''
      value = value.toString()
      const hashReg = /#\w+/gm
      value = value.replace(hashReg, '<a href="#" class="text-blue-500 font-semibold hover:underline">$&</a>')
      return value
    })

    return { process }
  }

}
</script>

<style scoped>
</style>
