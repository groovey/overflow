<template>
  <div class="p-4">
    <div class="bg-green-100">Welcome to testing</div>

    <!-- Button -->
    <div class="w-64 bg-green-300">
      <x-button @click.prevent="test" color="primary" small>Sample</x-button>
    </div>

    <!-- Bullet -->
    <div><x-bullet color="success"></x-bullet>Sample</div>

    <!-- Alert -->
    <x-alert color="error">
      <template v-slot:header border>ALERT HEADER</template>
      This is the content of the alert
    </x-alert>

    <!-- Card -->
    <x-card border>
      <template v-slot:header>CARD HEADER</template>
      1234
    </x-card>

    <!-- Checkbox -->
    <div>
      <x-checkbox checked="checked"></x-checkbox>
    </div>

    <!-- File -->
    <div>
      <x-file></x-file>
    </div>

    <!-- Header -->
    <x-header type="1">This is a H1 tag</x-header>
    <x-header type="2">This is a H2 tag</x-header>
    <x-header type="3">This is a H3 tag</x-header>
  </div>
</template>

<script>
import XButton from '@/components/Button.vue'
import XBullet from '@/components/Bullet.vue'
import XAlert from '@/components/Alert.vue'
import XCard from '@/components/Card.vue'
import XCheckbox from '@/components/Checkbox.vue'
import XFile from '@/components/File.vue'
import XHeader from '@/components/Header.vue'

export default {
  components: {
    XButton,
    XBullet,
    XAlert,
    XCard,
    XCheckbox,
    XFile,
    XHeader
  },
  data () {
    return {}
  },
  methods: {
    test () {
      console.log('test')
      alert('test')
    }
  }
}
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
