<template>
  <div class="hidden pl-4 pr-2 pb-2 lg:block lg:w-1/6">
    <div class="mb-2 text-md font-semibold text-gray-500">Contacts</div>
    <x-group-button text="Kobe Bryant" image="https://image.cnbcfm.com/api/v1/image/101524695-457220551.jpg?v=1395781183&w=1400&h=950"></x-group-button>

    <x-group-button
      text="Jimmy Buckets"
      image="https://app.lotuscdn.vn/thumb_w/200/2019/11/9/bn2t6oiet7gmog4a1od0_headshots_jimmy-butler-1.jpg"
    ></x-group-button>
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
