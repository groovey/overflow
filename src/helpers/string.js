export default {
  name: '',
  get () {
    console.log('helper string GET is called')
    console.log('name = ' + this.name)
    return this.name
  },
  set (name) {
    this.name = name
    console.log('helper string SET is called')
  }
}
