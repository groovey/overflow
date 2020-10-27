<template>
  <div class="flex justify-center">
    <div class="hidden pl-2 pr-4 pb-2 md:block md:w-1/4 lg:w-1/6">
      <div class="flex flex-row hover:bg-gray-200 p-2 rounded-lg">
        <div class="text-center">
          <x-avatar image="https://avatars1.githubusercontent.com/u/9622986?s=460&u=6cf4625d76f89ce011037ef10f9bc5e16a317758&v=4"></x-avatar>
        </div>
        <div class="flex flex-col ml-2 mt-2">
          <div class="text-sm font-semibold">Harold Kim</div>
        </div>
      </div>
      <div class="flex flex-row hover:bg-gray-200 p-2 rounded-lg">
        <div class="text-center">
          <x-avatar image="https://www.socialmediaexaminer.com/wp-content/uploads/2014/07/kl-facebook-pages-app-logo.jpg"></x-avatar>
        </div>
        <div class="flex flex-col ml-2 mt-2">
          <div class="text-sm font-semibold">Pages</div>
        </div>
      </div>
      <div class="flex flex-row hover:bg-gray-200 p-2 rounded-lg">
        <div class="text-center">
          <x-avatar image="https://vectorified.com/images/facebook-friends-icon-28.png"></x-avatar>
        </div>
        <div class="flex flex-col ml-2 mt-2">
          <div class="text-sm font-semibold">Friends</div>
        </div>
      </div>
    </div>
    <div class="lg:max-w-2xl md:w-3/4 lg:w-4/6 overflow-hidden">
      <!-- Whats on your mind section -->
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
        <!-- Post owner section -->
        <div class="flex p-4">
          <div class="flex-row w-3/4">
            <div class="flex flex-row">
              <div class="text-center">
                <x-avatar image="https://avatars1.githubusercontent.com/u/9622986?s=460&u=6cf4625d76f89ce011037ef10f9bc5e16a317758&v=4"></x-avatar>
              </div>
              <div class="flex flex-col ml-2">
                <div class="text-sm font-bold">Harold Kim</div>
                <div>12 hrs Facebook for Iphone</div>
              </div>
            </div>
          </div>
          <div class="flex-row w-1/4 text-right">...</div>
        </div>

        <!-- Status message section -->
        <div class="px-4 pt-1 pb-2">
          Mamba mentality.
          <a href="#" class="text-blue-500 font-semibold hover:underline">#ginamos</a>
        </div>

        <!-- Image section -->
        <div>
          <img class="object-cover object-center" src="https://thunderousintentions.com/wp-content/uploads/getty-images/2020/04/1168815397.jpeg" alt="" />
        </div>

        <div class="p-4">
          <!-- Smileys, like, comment and share section -->
          <div class="flex flex-row pt-1 pb-2">
            <div class="w-3/4 flex flex-row">
              <div class="">
                <img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/facebook/230/grinning-face-with-smiling-eyes_1f601.png"
                  alt=""
                  class="w-5"
                />
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

          <!-- Comment section -->
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

          <!-- Reply sections -->
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

          <!-- Write comment section -->
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
    <div class="hidden pl-4 pr-2 pb-2 lg:block lg:w-1/6">
      <div class="mb-2 text-md font-semibold text-gray-500">Contacts</div>
      <div class="flex flex-row flex-no-wrap hover:bg-gray-200 p-2 rounded-lg">
        <div class="text-center">
          <x-avatar
            image="data:image/jpeg;base64,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"
          ></x-avatar>
        </div>
        <div class="flex flex-col ml-2 mt-2">
          <div class="text-sm font-semibold">Kobe Bryant</div>
        </div>
      </div>
      <div class="flex flex-row flex-no-wrap hover:bg-gray-200 p-2 rounded-lg">
        <div class="text-center">
          <x-avatar image="https://app.lotuscdn.vn/thumb_w/200/2019/11/9/bn2t6oiet7gmog4a1od0_headshots_jimmy-butler-1.jpg"></x-avatar>
        </div>
        <div class="flex flex-col ml-2">
          <div class="text-sm font-semibold mt-2">Jimmy Buckets</div>
        </div>
      </div>
    </div>
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
