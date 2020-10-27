<template>
  <div>
    <x-card class="mb-4">
      <div class="flex flex-row p-4">
        <div class="w-12">
          <x-avatar image="https://avatars1.githubusercontent.com/u/9622986?s=460&u=6cf4625d76f89ce011037ef10f9bc5e16a317758&v=4"></x-avatar>
        </div>
        <div class="bg-gray-100 ml-2 px-4 pt-1 pb-2 rounded-full w-full">
          <input type="text" class="mt-1 bg-gray-100 w-full focus:outline-none focus:shadow-none" placeholder="What's on your mind?" />
        </div>
      </div>
    </x-card>

    <x-card>
      <div class="flex p-4">
        <div class="flex-row w-3/4">
          <div class="flex flex-row">
            <div class="text-center">
              <x-avatar image="https://avatars1.githubusercontent.com/u/9622986?s=460&u=6cf4625d76f89ce011037ef10f9bc5e16a317758&v=4"></x-avatar>
            </div>
            <div class="flex flex-col ml-2">
              <div class="text-sm font-bold">Harold Kim Cantil</div>
              <div>12 hrs Facebook for Iphone</div>
            </div>
          </div>
        </div>
        <div class="flex-row w-1/4 text-right">...</div>
      </div>
      <div class="px-4 pt-1 pb-2">
        Mamba mentality.
        <a href="#" class="text-blue-500 font-semibold hover:underline">#ginamos</a>
      </div>
      <div>
        <img class="object-cover" src="https://thunderousintentions.com/wp-content/uploads/getty-images/2020/04/1168815397.jpeg" alt="" />
      </div>
      <div class="p-4">
        <div class="flex flex-row pt-1 pb-2">
          <div class="w-3/4 flex flex-row">
            <div class="">
              <svg class="w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="ml-2">34</div>
          </div>
          <div class="w-1/4 text-right"><a href="#" class="hover:underline">8 Comments</a></div>
        </div>
        <hr />
        <div class="flex flex-row text-center p-1">
          <div class="w-1/3">Like</div>
          <div class="w-1/3">Comment</div>
          <div class="w-1/3">Share</div>
        </div>

        <hr />

        <div class="p-2 hover:underline">View 2 more comment</div>

        <div class="px-2 py-1 flex flex-row">
          <div class="">
            <x-avatar
              image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12a7eda1-3863-4425-b9e2-67c68af8a06d/d7t1614-b5cac041-a3e1-4f9d-b72c-5a0af1b94b6e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTJhN2VkYTEtMzg2My00NDI1LWI5ZTItNjdjNjhhZjhhMDZkXC9kN3QxNjE0LWI1Y2FjMDQxLWEzZTEtNGY5ZC1iNzJjLTVhMGFmMWI5NGI2ZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Ngle1T0Xpe-SMvtBOgTcqq25qPS1_0e2i8YG8ATQSGM"
            ></x-avatar>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-col bg-gray-100 ml-2 px-4 pt-1 pb-2 rounded-full">
              <div class="text-sm font-bold">Michael Jordan</div>
              <div>Bro, Whad up? this is the goat.</div>
            </div>
            <div class="ml-6 text-xs font-semibold">Like &nbsp; Reply</div>
          </div>
        </div>

        <div class="px-2 py-1 flex flex-row ml-16">
          <div class="">
            <x-avatar
              image="data:image/jpeg;base64,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"
            ></x-avatar>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-col bg-gray-100 ml-2 px-4 pt-1 pb-2 rounded-full">
              <div class="text-sm font-bold">Jalen Green</div>
              <div>Are you talking to me jordan?</div>
            </div>
            <div class="ml-6 text-xs font-semibold">Like &nbsp; Reply</div>
          </div>
        </div>
        <div class="flex flex-row px-2 mt-2">
          <div class="w-12">
            <x-avatar image="https://avatars1.githubusercontent.com/u/9622986?s=460&u=6cf4625d76f89ce011037ef10f9bc5e16a317758&v=4"></x-avatar>
          </div>
          <div class="bg-gray-100 ml-2 px-4 pt-1 pb-2 rounded-full w-full">
            <input type="text" class="mt-1 bg-gray-100 w-full focus:outline-none focus:shadow-none" placeholder="Write a comment?" />
          </div>
        </div>
      </div>
    </x-card>
  </div>
</template>

<script>
import XCard from '@/components/Card.vue'
import XAvatar from '@/components/Avatar.vue'

export default {
  components: {
    XCard,
    XAvatar
  },
  setup () {

  }
}
</script>

<style>
</style>
