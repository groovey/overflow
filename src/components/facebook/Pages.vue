<template>
  <div class="hidden pl-2 pr-4 pb-2 md:block md:w-1/4 lg:w-1/6">
    <x-group-button
      text="Harold Kim"
      image="https://avatars1.githubusercontent.com/u/9622986?s=460&u=6cf4625d76f89ce011037ef10f9bc5e16a317758&v=4"
    ></x-group-button>
    <x-group-button text="Pages" image="https://www.socialmediaexaminer.com/wp-content/uploads/2014/07/kl-facebook-pages-app-logo.jpg"></x-group-button>
    <x-group-button text="Friends" image="https://vectorified.com/images/facebook-friends-icon-28.png"></x-group-button>
  </div>
</template>

<script>
import XGroupButton from '@/components/facebook/group/Button.vue'

export default {
  components: {
    XGroupButton
  }
}
</script>

<style scoped>
</style>
