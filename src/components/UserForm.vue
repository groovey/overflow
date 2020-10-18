<template>
  <div>
    <form @submit.prevent="add">
      <input type="text" placeholder="name" name="name" v-model="name" />
      <input type="text" placeholder="email" name="email" v-model="email" />
      <input type="submit" value="submit" />
    </form>

    <transition enter-active-class="animated flipInY">
      <div>{{ users }}</div>
    </transition>

    <div class="animate__animated animate__bounce animate__delay-2s">Example</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      email: null,
      users: []
    }
  },
  methods: {
    add () {
      this.users.push({ name: this.name, email: this.email })
      this.name = ''
      this.email = ''
    }
  }
}
</script>

<style scoped>
/* @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'; */
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';

div {
  padding: 10px;
  /* background-color: orange; */
  margin-bottom: 10px;
}
input[type='text'] {
  padding: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
