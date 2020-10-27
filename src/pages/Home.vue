<template>
  <div class="flex justify-center">
    <x-pages></x-pages>
    <x-timeline></x-timeline>
    <x-contacts></x-contacts>
  </div>
</template>

<script>
import XTimeline from '@/components/facebook/Timeline.vue'
import XContacts from '@/components/facebook/Contacts.vue'
import XPages from '@/components/facebook/Pages.vue'

export default {
  components: {
    XTimeline,
    XContacts,
    XPages

  },
  setup () {

  }
}
</script>

<style>
</style>
