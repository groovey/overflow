<template>
  <div>
    <div>
      <div>
        <input v-on:click="send" type="button" value="Emit Data" />
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
