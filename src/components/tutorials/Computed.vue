<template>
  <div>
    <div v-bind:class="highlight">v-bind:class via computed function</div>
    First name <input type="text" placeholder="first name" name="firstName" v-model="firstName" /> <br />
    Last name <input type="text" placeholder="last name" name="lastName" v-model="lastName" /> <br />
    Full name<input type="text" placeholder="full name" name="lastName" v-model="fullName" /> <br />
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    highlight () {
      return {
        black: true,
        bg_yellow: true
      }
    },
    fullName: {
      get () {
        return this.firstName + ' ' + this.lastName
      },
      set (value) {
        const array = value.split(' ')
        this.firstName = array[0]
        this.lastName = array[array.length - 1]
      }
    }
  }
}
</script>

<style scoped>
.black {
  color: black;
}
.bg_yellow {
  background-color: yellow;
}
</style>
