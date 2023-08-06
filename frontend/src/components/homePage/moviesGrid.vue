<template>
    <!-- Product List Section: Products Grid -->
    <div class="bg-white dark:bg-gray-800">
        <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <!-- Filters -->
            <div
                class="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 sm:space-x-2 mb-5">
                <div>
                    <span class="inline-block font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{{moviesStore.movies.length}}</span>
                    movies
                </div>


            </div>
            <!-- END Filters -->

            <!-- Products -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                <div v-for="movie in moviesStore.movies" :key="movie.id">
                    <div class="group relative overflow-hidden mb-2">
                        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Movie Poster" />
                        <div
                            class="p-4 flex items-center justify-center absolute inset-0 bg-indigo-300 bg-opacity-60 transform transition ease-out opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100">
                            <div class="flex flex-col space-y-2">
                                <button type="button"
                                    @click="router.push('/movie/detail/'+movie.id)"
                                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white">
                                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                        class="opacity-50 hi-solid hi-heart inline-block w-4 h-4">
                                        <path fill-rule="evenodd"
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Details</span>
                                </button>

                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0)" class="block font-semibold text-gray-600 hover:text-gray-500">
                        {{ movie.title }}
                    </a>
                    <div class="text-gray-500 font-medium">
                        {{ movie.overview }}
                    </div>
                </div>

            </div>
            <!-- END Products -->

            <hr class="my-10" />

            <!-- Pagination -->
            <div>
                <nav class="flex sm:hidden">
                    <a href="javascript:void(0)"
                        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            class="hi-solid hi-chevron-left inline-block w-5 h-5">
                            <path fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <div class="flex items-center flex-grow justify-center px-2 sm:px-4">
                        <span>Page <span class="font-semibold">1</span> of <span class="font-semibold">20</span></span>
                    </div>
                    <a href="javascript:void(0)"
                        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            class="hi-solid hi-chevron-right inline-block w-5 h-5">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </nav>
                <nav class="hidden sm:flex sm:justify-between">
                    <a href="javascript:void(0)"
                        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            class="hi-solid hi-chevron-left inline-block w-5 h-5">
                            <path fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <div class="inline-flex">
                        <a href="javascript:void(0)"
                            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                            <span class="px-0 sm:px-1">1</span>
                        </a>
                        <a href="javascript:void(0)"
                            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                            <span class="px-0 sm:px-1">2</span>
                        </a>
                        <a href="javascript:void(0)"
                            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                            <span class="px-0 sm:px-1">3</span>
                        </a>
                        <div class="flex items-center justify-center px-2 sm:px-4">
                            ...
                        </div>
                        <a href="javascript:void(0)"
                            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                            <span class="px-0 sm:px-1">19</span>
                        </a>
                        <a href="javascript:void(0)"
                            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                            <span class="px-0 sm:px-1">20</span>
                        </a>
                    </div>
                    <a href="javascript:void(0)"
                        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            class="hi-solid hi-chevron-right inline-block w-5 h-5">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </nav>
            </div>
            <!-- END Pagination -->
        </div>
    </div>
    <!-- END Product List Section: Products Grid -->
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useMoviesStore } from '../../stores/moviesStore';
const moviesStore = useMoviesStore();
import { useRouter } from 'vue-router';
const router = useRouter();


onMounted(async () => {
    await moviesStore.fetchMovies('trending/all/day');
});
</script>
<style ></style>