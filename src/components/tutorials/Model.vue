<template>
  <div>
    <div class="container">
      <h3>V-model for inputs</h3>
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
  data () {
    return {
      message: {
        textarea: '',
        radio: '',
        checkbox: [],
        select: '',
        fruit: ''
      },
      users: [],
      fruits: [
        'apple', 'orange', 'banana'
      ]
    }
  },
  props: {},
  methods: {
    add () {
      this.users.push({ firstName: this.firstName, lastName: this.lastName, email: this.email })
      this.firstName = ''
      this.lastName = ''
      this.email = ''
    }
  },
  computed: {},
  components: {}
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
</style>
