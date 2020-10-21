export default {
  todo: '',
  get () {
    console.log('todo.get is called')
    console.log('todo = ' + this.todo)
    return this.todo
  },
  set (todo) {
    this.todo = todo
    console.log('todo.set is called')
  }
}
