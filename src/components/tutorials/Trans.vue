<template>
  <div>
    <button @click="show = !show">Toggle Fade</button>

    <transition name="fade" mode="out-in">
      <div v-if="show">hello</div>
      <div v-else-if="!show">world</div>
    </transition>

    <hr />

    <ul>
      <transition-group name="pop">
        <li v-for="fruit in fruits" v-bind:key="fruit">{{ fruit }}</li>
      </transition-group>
    </ul>
    <input type="text" v-model="basket" />
    <button type="text" @click="add">Add</button>
    <button type="text" @click="remove">Delete</button>

    <hr />

    <button @click="animate = !animate">Via Animate CSS</button>

    <transition mode="out-in" enter-active-class="animate__animated animate__bounce" leave-active-class="animate__animated animate__swing">
      <div v-if="animate">hello</div>
      <div v-else-if="!animate">world</div>
    </transition>

    <hr />

    <div>
      <a href="https://v3.vuejs.org/guide/transitions-enterleave.html#javascript-hooks" target="_blank">Click to open the vue3 documentation</a>
    </div>

    <button @click="viajs = !viajs">Via JS Animation</button>

    <transition
      mode="out-in"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false"
    >
      <div v-if="viajs">hello</div>
      <div v-else-if="!viajs">world</div>
    </transition>
  </div>
</template>

<script>

export default {
  data () {
    return {
      show: true,
      fruits: ['apple', 'banana', 'orange'],
      basket: '',
      animate: true,
      viajs: true

    }
  },
  methods: {
    add () {
      if (this.basket) {
        this.fruits.push(this.basket)
        this.basket = ''
      }
    },
    remove () {
      this.fruits.pop()
    },

    // Most used transition hooks
    // beforeEnter, enter, leave
    beforeEnter (el) {
      console.log('beforeEnter')
    },
    enter (el, done) {
      done()
    },
    leave (el, done) {
      console.log('leave')
      done()
    }

  },
  mounted () {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/velocity-animate@2.0/velocity.min.js')
    document.head.appendChild(script)
  }
}
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(25px);
}
.pop-enter-active,
.pop-leave-active {
  transition: all 1s;
}
</style>
