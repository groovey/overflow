
export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key) => {
      console.log(options)
    }

    app.directive('my-directive', {
      mounted (el, binding, vnode, oldVnode) {
        console.log('my-directive is mounted')
      }
    })

    app.mixin({
      created () {
      }
    })
  }
}
