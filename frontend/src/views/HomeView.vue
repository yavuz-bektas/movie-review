<template>
    <!-- Announcement Banner -->
    <a class="group block bg-gray-100 p-4 rounded-md text-center transition-all duration-300 dark:bg-gray-800" href="#">
        <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto dark:bg-gray-800">
            <p class="mr-2 inline-block text-sm text-gray-800 dark:text-gray-200 dark:bg-gray-800">
                Experience Brilliance: Illuminate Your World with Dark Mode! </p>
            <span
                class="group-hover:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-blue-600 text-sm dark:text-blue-500 dark:bg-gray-800">

                <input type="checkbox" id="hs-account-activity" @click="toggleDarkMode"
                    class="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800

before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                    checked>
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
            </span>

        </div>
    </a>
    <!-- End Announcement Banner -->


    <!--     <button @click="toggleDarkMode">
    {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
  </button>
 -->

    <heroForm />
    <moviesGrid />
</template>

<script setup lang="ts">
import heroForm from "../components/homePage/heroForm.vue"
import moviesGrid from "../components/homePage/moviesGrid.vue"

import { ref } from 'vue';

const darkMode = ref(false);

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark', darkMode.value);
    darkMode.value = !darkMode.value;
}
</script>
<style></style>
