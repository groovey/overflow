<template>
  <div>
    <div>
      <div>Props v-bind id value = {{ id }}</div>
      <div>Props title value as string = {{ title }}</div>
      <div>Props title value with html code = <span v-html="html"></span></div>
      <div>The v bind image directive = <img v-bind:src="img" width="20" /></div>
      <div v-bind:class="class_placeholder">The v bind class via placeholder</div>
      <div v-bind:class="[class_one, class_two]">The v bind class via array placeholder</div>
      <div v-bind:class="{ white_font: true, blue_background: true }">The v bind class via json object</div>
      <div v-bind:class="better_placeholder">The v bind class via json object (A better way of doing it)</div>
      <div :class="highlight">The v bind class via computed function</div>
      <div>
        <input v-on:click="send" type="button" value="Emit Data" />
      </div>
    </div>

    <div class="container">
      <h3>V-model for input</h3>
      <div class="left">
        <form @submit.prevent="add">
          <input type="text" placeholder="first name" name="firstName" v-model="firstName" /> <br />
          <input type="text" placeholder="last name" name="lastName" v-model="lastName" /> <br />
          <input type="text" placeholder="email" name="email" v-model="email" /> <br />
          <input type="submit" value="submit" />
        </form>
      </div>
      <div class="right">
        <div>{{ users }}</div>
        <div>Computed fullName : <input v-model="fullName" /></div>
      </div>
    </div>

    <div class="container">
      <h3>V-model for textarea</h3>
      <div class="left">
        <textarea rows="5" v-model="message.textarea"></textarea>
      </div>
      <div class="right">
        {{ message.textarea }}
      </div>
    </div>

    <div class="container">
      <h3>V-model for radio</h3>
      <div class="left">
        <div>
          <label for="radio_apple">Apple</label>
          <input id="radio_apple" type="radio" value="apple" v-model="message.radio" />
        </div>
        <div>
          <label for="radio_banana">Banana</label>
          <input id="radio_banana" type="radio" value="banana" v-model="message.radio" />
        </div>
        <div>
          <label for="radio_orange">Orange</label>
          <input id="radio_orange" type="radio" value="orange" v-model="message.radio" />
        </div>
      </div>
      <div class="right">
        {{ message.radio }}
      </div>
    </div>

    <div class="container">
      <h3>V-model for checkbox</h3>
      <div class="left">
        <div>
          <label for="checkbox_apple">Apple</label>
          <input id="checkbox_apple" type="checkbox" value="apple" v-model="message.checkbox" />
        </div>
        <div>
          <label for="checkbox_banana">Banana</label>
          <input id="checkbox_banana" type="checkbox" value="banana" v-model="message.checkbox" />
        </div>
        <div>
          <label for="checkbox_orange">Orange</label>
          <input id="checkbox_orange" type="checkbox" value="orange" v-model="message.checkbox" />
        </div>
      </div>
      <div class="right">
        {{ message.checkbox }}
      </div>
    </div>

    <div class="container">
      <h3>V-model for select</h3>
      <div class="left">
        <select name="" id="" v-model="message.select">
          <option value="">Select fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </div>
      <div class="right">
        {{ message.select }}
      </div>
    </div>

    <div class="container">
      <h3>Dynamic select base on model data</h3>
      <div class="left">
        <select name="" id="" v-model="message.fruit">
          <option value="">Select fruit</option>
          <option v-for="fruit in fruits" :key="fruit" :value="fruit">{{ fruit }}</option>
        </select>
      </div>
      <div class="right">
        {{ message.fruit }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    id: Number
  },
  data () {
    return {
      message: {
        textarea: '',
        radio: '',
        checkbox: [],
        select: '',
        fruit: ''
      },
      fruits: [
        'apple', 'orange', 'banana'
      ],
      description: 'This is a description from the component.',
      fullDescription: 'This the full description.',
      firstName: '',
      lastName: '',
      email: '',
      users: [],
      html: '<b><u>' + this.title + '</u></b>',
      img: 'http://localhost:8080/img/logo.82b9c7a5.png',
      class_placeholder: 'red_font',
      class_one: 'white_font',
      class_two: 'orange_background',
      better_placeholder: {
        white_font: true,
        green_background: true
      }
    }
  },
  methods: {
    add () {
      this.users.push({ firstName: this.firstName, lastName: this.lastName, email: this.email })
      this.firstName = ''
      this.lastName = ''
      this.email = ''
    },
    send () {
      this.$emit('relay', this.description, this.fullDescription)
      console.log(this.description)
    }
  },
  computed: {

    fullName: {
      get () {
        return this.firstName + ' ' + this.lastName
      },
      set (value) {
        const array = value.split(' ')
        this.firstName = array[0]
        this.lastName = array[array.length - 1]
      }
    },
    highlight () {
      return {
        green_font: true,
        yellow_background: true
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  margin-bottom: 10px;
}

.left {
  width: 50%;
}

.right {
  width: 50%;
}

.white_font {
  color: white;
}
.red_font {
  color: red;
}

.green_font {
  color: green;
}

.blue_background {
  background-color: blue;
}

.orange_background {
  background-color: orange;
}

.green_background {
  background-color: green;
}

.yellow_background {
  background-color: yellow;
}
</style>
