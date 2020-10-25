<template>
  <div>
    <!-- V Directives -->
    <div v-html="html"></div>

    <!-- V-bind -->
    <div>The v bind image directive = <img v-bind:src="image" width="50" /></div>
    <div v-bind:class="error">v-bind:class via a data placeholder</div>
    <div v-bind:class="{ green: true, bg_orange: true }">v-bind:class via json object</div>
    <div v-bind:class="[color.white, bg.green]">v-bind:class via array</div>

    <!-- Data loop -->
    <div v-for="(user, index) in users" v-bind:key="`user-${index}`" class="user">
      <p>
        Index = {{ index }} , id = {{ user.id }}, name = {{ user.name }}, email = {{ user.email }}
        <button v-on:click="hello(user)">Say Hello</button>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      html: '<b><u>Data value that contains html code</u></b>',
      image: 'https://via.placeholder.com/200.png/09f/fff',
      error: {
        white: true,
        bg_red: true
      },
      color: {
        yellow: 'yellow',
        green: 'green',
        white: 'white',
        black: 'black'
      },
      bg: {
        yellow: 'bg_yellow',
        green: 'bg_green',
        red: 'bg_red',
        orange: 'bg_orange'
      },
      users: [
        { id: 1, name: 'Person 1', email: 'person1@gmail.com' },
        { id: 2, name: 'Person 2', email: 'person2@gmail.com' }
      ]
    }
  },
  methods: {
    hello (user) {
      alert(user.name + ' <' + user.email + '>')
    }
  }
}
</script>

<style scoped>
.green {
  color: green;
}
.black {
  color: black;
}
.red {
  color: red;
}
.white {
  color: white;
}
.bg_yellow {
  background-color: yellow;
}
.bg_orange {
  background-color: orange;
}
.bg_green {
  background-color: green;
}
.bg_red {
  background-color: red;
}
</style>
