<template>
  <span>
    <div
      x-show=""
      id=""
      class="hidden1 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50"
      style="background-color: rgba(0, 0, 0, 0.25)"
      v-show="overlay"
    >
      <div class="shadow-xl rounded bg-white" style="width: 450px">
        <div class="flex px-5 pt-4 pb-2">
          <button @click.prevent="hide" class="ml-auto focus:outline-none">Close</button>
        </div>
        <div class="px-6 pt-0 pb-2">
          <h3 class="text-xl font-semibold mb-2 text-gray-500 text-left">
            <slot name="header"></slot>
          </h3>
          <div class="text-left">
            <slot name="body"></slot>
          </div>
        </div>
        <div class="px-5 pt-5 py-8 text-right">
          <slot :actions="actions"></slot>
        </div>
      </div>
    </div>
    <span @click="show">
      <slot name="trigger"></slot>
    </span>
  </span>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  props: {},

  setup (props, content) {
    var overlay = ref(false)
    const render = computed(() => {})

    function show () {
      overlay.value = true
    }

    function hide () {
      overlay.value = false
    }

    function actions (action) {
      if (action === 'hide') {
        return hide()
      }
    }
    return { overlay, render, show, hide, actions }
  }

}
</script>

<style scoped lang="postcss">
</style>
