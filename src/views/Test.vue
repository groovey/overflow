<template>
  <div>
    Test

    <User header="Listing of users"></User>
    <UserForm></UserForm>
  </div>
</template>

<script>
import User from '@/components/User.vue'
import UserForm from '@/components/UserForm.vue'

export default {
  components: {
    User,
    UserForm
  }
}
</script>

<style>
</style>
