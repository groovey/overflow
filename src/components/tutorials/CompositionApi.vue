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
      <input v-model="data.todo" placeholder="type and see the data.todo" />
    </div>
    <div>Reactive todo value: {{ data.todo }}</div>
    <div>
      <button @click="getTodo">getTodo reactive value</button>
    </div>
    <hr />
    <div>
      <button @click="getImportedFunction">getImportedFunction value</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, reactive } from 'vue'
import todo from '@/helpers/todo'

export default {
  props: ['owner'],
  setup (props, context) {
    const fruits = ref(['apple', 'banana', 'orange'])
    const selected = ref('')

    const data = reactive({
      todo: ''
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

    function getTodo () {
      alert(data.todo)
    }

    function getImportedFunction () {
      todo.set('go to work')
      todo.get()
    }

    watch(selected, (newValue, oldValue) => {
      console.log('watcher old value = ', oldValue)
      console.log('watcher new value = ', newValue)
    })

    return { data, fruits, selected, selectedFruit, getProps, pay, getTodo, getImportedFunction }
  }

}
</script>

<style scoped>
div {
  padding: 10px;
}
</style>
