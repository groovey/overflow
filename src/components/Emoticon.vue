<template>
  <img :src="render" alt="" class="w-5" />
</template>

<script>
//  https://emojipedia.org/facebook/
import { computed } from 'vue'

export default {
  props: {
    icon: String
  },

  components: {
  },

  setup (props) {
    const icon = {
      laugh: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/facebook/230/grinning-face-with-smiling-eyes_1f601.png',
      laughtears: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/230/face-with-tears-of-joy_1f602.png'
    }

    const render = computed(() => {
      return icon[props.icon]
    })

    return { render }
  }

}
</script>

<style scoped>
</style>
