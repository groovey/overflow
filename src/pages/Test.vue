<template>
  <div>
    <!-- Button -->
    <div class="w-64 bg-green-300">
      <x-button @click.prevent="test" color="primary" small block>Sample</x-button>
    </div>

    <!-- Bullet -->
    <div><x-bullet color="success"></x-bullet>Sample</div>

    <!-- Alert -->
    <x-alert color="error">
      <template v-slot:header border>ALERT HEADER</template>
      This is the content of the alert
    </x-alert>

    <!-- Card -->
    <x-card border>
      <template v-slot:header>CARD HEADER</template>
      1234
    </x-card>

    <!-- Checkbox -->
    <div>
      <!-- <x-checkbox checked="checked" name="apple" id="apple"></x-checkbox> -->
      <x-input type="checkbox" checked="checked" name="apple" id="apple"></x-input>
      <x-label for="apple">This is a label</x-label>
    </div>

    <!-- Radio -->
    <div>
      <div>
        <x-input type="radio" name="fruits" id="fruit_apple"></x-input>
        <x-label for="fruit_apple">Apple</x-label>
      </div>
      <div>
        <x-input type="radio" name="fruits" id="fruit_orange"></x-input>
        <x-label for="fruit_orange">Orange</x-label>
      </div>
    </div>

    <!-- File -->
    <div>
      <x-file></x-file>
    </div>

    <!-- Header -->
    <x-header type="1">This is a H1 tag</x-header>
    <x-header type="2">This is a H2 tag</x-header>
    <x-header type="3">This is a H3 tag</x-header>

    <!-- Input -->
    <div class="w-64">
      <x-input placeholder="Please input your name"></x-input>
      <x-input type="password" placeholder="Password?"></x-input>
      <x-input disabled placeholder="disabled input"></x-input>
    </div>

    <!-- Label -->
    <div>
      <x-label>This is a label</x-label>
    </div>

    <!-- Modal -->
    <div>
      <x-modal>
        <template v-slot:header>Confirm</template>

        <template v-slot:body>Are you sure you want to delete?</template>

        <template v-slot="props">
          <x-button color="secondary" @click="props.actions('hide')">Cancel</x-button>
          <x-button color="primary" class="ml-1">Confirm</x-button>
        </template>

        <template v-slot:trigger>
          <x-button>Trigger Modal 1</x-button>
        </template>
      </x-modal>
    </div>

    <!-- Label -->
    <div>
      <x-pill color="warning">inactive</x-pill>
    </div>

    <!-- Select -->
    <div>
      <x-select>
        <option value="" v-for="(fruit, index) in fruits" :key="index">{{ fruit }}</option>
      </x-select>
    </div>

    <!-- Stickies -->
    <div>
      <x-stickies color="warning">active</x-stickies>
    </div>

    <!-- Textarea -->
    <div>
      <x-textarea value="This is a text area"></x-textarea>
    </div>

    <!-- Avatar -->
    <div>
      <x-avatar text="HK" class="mr-2"></x-avatar>
      <x-avatar
        image="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      ></x-avatar>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import XButton from '@/components/Button.vue'
import XBullet from '@/components/Bullet.vue'
import XAlert from '@/components/Alert.vue'
import XCard from '@/components/Card.vue'
import XFile from '@/components/File.vue'
import XHeader from '@/components/Header.vue'
import XInput from '@/components/Input.vue'
import XLabel from '@/components/Label.vue'
import XModal from '@/components/Modal.vue'
import XPill from '@/components/Pill.vue'
import XSelect from '@/components/Select.vue'
import XStickies from '@/components/Stickies.vue'
import XTextarea from '@/components/Textarea.vue'
import XAvatar from '@/components/Avatar.vue'

export default {
  components: {
    XButton,
    XBullet,
    XAlert,
    XCard,
    XFile,
    XHeader,
    XInput,
    XLabel,
    XModal,
    XPill,
    XSelect,
    XStickies,
    XTextarea,
    XAvatar
  },

  setup (props) {
    const fruits = ref(['apple', 'banana', 'orange'])

    function test () {
      // console.log('test')
      alert('test')
    }

    return { fruits, test }
  }
}
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
input {
  margin-bottom: 10px;
}
</style>
