import { ref, computed } from 'vue'

// This is another way of doing this.
// Issue: there is no this value on computed
export const todo = {
  task: ref(''),
  todos: ref(['do work', 'go gym', 'play games']),
  typing: computed(() => {
    return 'your tying a task ... '
  }),
  add () {
    var task = this.task
    if (task.value) {
      this.todos.value.push(task.value)
      task.value = ''
    }
  },
  remove () {
    this.todos.value.pop()
  }
}

// Another way of doing,
// Issue, messy but you can access values easily

const message = ref('')

const typing = computed(() => {
  return 'your are typing : ' + message.value
})

const add = () => {
  var msg = 'MESSAGE = ' + message.value
  console.log(msg)
  alert(msg)
}

export { message, typing, add }
