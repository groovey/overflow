<template>
  <div>
    <div>
      <button @click="getProps">Get the props value</button>
    </div>

    Refs fruits value = {{ fruits }}

    <div>
      <select v-model="selected">
        <option disabled value="">Select a fruit</option>
        <option v-for="(fruit, index) in fruits" :key="fruit + index">{{ fruit }}</option>
      </select>
    </div>
    <div>Selected value = {{ selected }}</div>
    <div>Computed Selected value = <span v-html="selectedFruit"></span></div>
    <div>
      <button @click="pay">Add to Basket</button>
    </div>

    <hr />
    <div>
      <input v-model="data.message" placeholder="What is your message?" />
    </div>
    <div>Reactive message value: {{ data.message }}</div>
    <div>
      <button @click="getMessage">getMessage reactive value</button>
    </div>

    <hr />
    <div>
      <button @click="getHelper">getHelper value</button>
    </div>

    <hr />
    <div>
      <button>Chat</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, reactive, onMounted } from 'vue'
import string from '@/helpers/string'

export default {
  props: ['owner'],
  setup (props, context) {
    const fruits = ref(['apple', 'banana', 'orange'])
    const selected = ref('')

    const data = reactive({
      message: ''
    })

    // Computed cannot be used in @click
    const selectedFruit = computed(() => {
      if (selected.value) {
        return ' You have selected the fruit, <b>' + selected.value + '.</b>'
      }
    })

    // Methods
    function getProps () {
      alert(props.owner)
    }

    function pay () {
      console.log('pay it')
      context.emit('relay', 'process payment')
    }

    function getMessage () {
      alert(data.message)
    }

    function getHelper () {
      string.set('go to work')
      string.get()
    }

    // Export function from chat

    watch(selected, (newValue, oldValue) => {
      console.log('watcher old value = ', oldValue)
      console.log('watcher new value = ', newValue)
    })

    onMounted(() => {
      console.log('mounted')
    })

    return { data, fruits, selected, selectedFruit, getProps, pay, getMessage, getHelper }
  }

}
</script>

<style scoped>
div {
  padding: 10px;
}
</style>
