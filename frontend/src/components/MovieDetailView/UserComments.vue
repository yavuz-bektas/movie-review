<template>
    <!-- Comments Section: Simple -->
    <div class="bg-white dark:bg-gray-800">
        <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div class="max-w-3xl mx-auto space-y-4 lg:space-y-8">
                <!-- Post Comment Form -->
                <div class="space-y-6">
                    <div>
                        <div class="text-right text-sm mb-1">
                            Posting as <span class="font-medium">{{ moviesStore.username }}</span>, <a
                                href="javascript:void(0)" class="text-indigo-600 hover:text-indigo-400">not you?</a>
                            <div class="text-center">
                                <span class="flex flex-row-reverse">
                                    <!-- Use v-for to loop through the stars based on the 'numStars' data property -->
                                    <svg v-for="i in totalStars" :key="i"
                                        class="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100"
                                        width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 24 24" stroke="currentColor" @click="selectStars(i)">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <textarea v-model="commentText"
                            class="block border border-gray-200 rounded placeholder-gray-400 px-3 py-2 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 dark:bg-gray-800"
                            id="tk-comment" rows="4" placeholder="Join the conversation.."></textarea>
                    </div>
                    <button type="button" @click="postRequest"
                        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            class="hi-solid hi-pencil inline-block w-5 h-5">
                            <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                            </path>
                        </svg>
                        <span>Post Comment</span>
                    </button>
                </div>


                <!-- END Post Comment Form -->

                <hr />

                <messagePopup v-if="genericStoreInstance.messageVisible" />

                <!-- Comment Box -->
                <div class="flex space-x-4 bg-gray-100 p-5 rounded-lg dark:bg-gray-800"
                    v-for="i in moviesStore.comments.comment" :key="i.id">

                    <div class="flex-grow">
                        <p class="text-sm sm:text-base leading-relaxed mb-1">
                            <a href="javascript:void(0)"
                                class="font-semibold text-indigo-600 hover:text-indigo-400">{{ i.username }}</a>
                            {{ i.text }}
                        </p>
                        <div class="text-sm space-x-2">
                            <svg class="hi-solid hi-star inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                v-for="j in i.rating" :key="j.id" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <span class="text-gray-600">{{ i.createdDateTime }}</span>
                        </div>
                    </div>
                </div>
                <!-- END Comment -->


            </div>
        </div>
    </div>
    <!-- END Comments Section: Simple -->
</template>



<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMoviesStore } from '../../stores/moviesStore';
import messagePopup from "../../components/generic/messagePopup.vue"
import { genericStore } from '../../stores/genericStore';

const moviesStore = useMoviesStore();
const genericStoreInstance = genericStore();


const numStars = ref(""); // Initial number of stars, you can change this as needed
const totalStars = 5; // Total number of stars available to select
const selectStars = (stars) => {
    // Ensure the number of stars stays within the range [1, totalStars]
    numStars.value = Math.max(1, Math.min(stars, totalStars));
};

const commentText = ref("")
const postRequest = () => {
    moviesStore.postComment(moviesStore.movieIdFor, commentText, numStars.value)
    commentText.value = ""
}

</script>




<style></style>