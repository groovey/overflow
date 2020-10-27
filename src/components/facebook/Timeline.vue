<template>
  <div class="lg:max-w-2xl md:w-3/4 lg:w-4/6 overflow-hidden">
    <!-- Whats on your mind section -->
    <x-card class="mb-4">
      <x-post-create placeholder="What's on your mind?"></x-post-create>
    </x-card>

    <x-card>
      <!-- Post header section -->
      <x-post-header author="Harold Kim" origin="12 Hrs Facebook for Iphone"></x-post-header>

      <!-- Status message section -->
      <x-post-message text="Mamba mentality. #ginamos #idol"></x-post-message>

      <!-- Image section -->
      <x-post-image src="https://thunderousintentions.com/wp-content/uploads/getty-images/2020/04/1168815397.jpeg"></x-post-image>

      <!-- Post action section -->
      <x-post-actions likes="32" comments="8" more="2"></x-post-actions>

      <!-- Comment section -->
      <x-post-comment
        author="Michael Jordan"
        message="Bro, Whad up? this is the goat."
        avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12a7eda1-3863-4425-b9e2-67c68af8a06d/d7t1614-b5cac041-a3e1-4f9d-b72c-5a0af1b94b6e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTJhN2VkYTEtMzg2My00NDI1LWI5ZTItNjdjNjhhZjhhMDZkXC9kN3QxNjE0LWI1Y2FjMDQxLWEzZTEtNGY5ZC1iNzJjLTVhMGFmMWI5NGI2ZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Ngle1T0Xpe-SMvtBOgTcqq25qPS1_0e2i8YG8ATQSGM"
      ></x-post-comment>

      <!-- Reply section -->
      <x-post-reply
        author="Jalen Green"
        message="I will be the future goat."
        avatar="https://a.espncdn.com/combiner/i?img=/i/headshots/recruiting/ncb/players/190/230212.jpg&w=190&h=254"
      ></x-post-reply>

      <!-- Reply to comments section -->
      <x-post-create placeholder="Write a comment?"></x-post-create>
    </x-card>
  </div>
</template>

<script>
import XCard from '@/components/Card.vue'
import XPostCreate from '@/components/facebook/post/Create.vue'
import XPostHeader from '@/components/facebook/post/Header.vue'
import XPostMessage from '@/components/facebook/post/Message.vue'
import XPostImage from '@/components/facebook/post/Image.vue'
import XPostActions from '@/components/facebook/post/Actions.vue'
import XPostComment from '@/components/facebook/post/Comment.vue'
import XPostReply from '@/components/facebook/post/Reply.vue'

export default {
  components: {
    XCard,
    XPostCreate,
    XPostHeader,
    XPostMessage,
    XPostImage,
    XPostActions,
    XPostComment,
    XPostReply
  }
}
</script>

<style>
</style>
