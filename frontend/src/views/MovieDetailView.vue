<template>
    <!-- Product Details Section: With Info Sidebar -->
    <div v-if="moviesStore.movieDetails" class="bg-white dark:bg-gray-800">
        <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <!-- Heading -->
            <div class="pb-3 mb-5 border-b">
                <a href="javascript:void(0)" class="font-semibold md:text-lg text-gray-600 hover:text-gray-500">
                    {{ moviesStore.movieDetails.title }}
                </a>
            </div>
            <!-- END Heading -->

            <!-- Product -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 ">
                <!-- Product Main Info -->
                <div class="md:col-span-3">
                    <img :src="'https://image.tmdb.org/t/p/w500/' + moviesStore.movieDetails.poster_path"
                        alt="Movie Poster" />
                    <div class="grid grid-cols-1 sm:grid-cols-2 py-5 space-y-2 sm:space-y-0 sm:space-x-2 ">
                        <button type="button" @click="navigateToDashboard"
                            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                class="opacity-50 hi-solid hi-desktop-computer inline-block w-5 h-5">
                                <path fill-rule="evenodd"
                                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Home</span>
                        </button>
                        <button type="button"
                            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                class="opacity-50 hi-solid hi-share inline-block w-5 h-5">
                                <path
                                    d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z">
                                </path>
                            </svg>
                            <span>Share</span>
                        </button>
                    </div>
                    <div class="prose prose-indigo">
                        <p>
                            {{ moviesStore.movieDetails.overview }}

                        </p>

                    </div>
                </div>
                <!-- END Product Main Info -->

                <!-- Product Info Sidebar -->
                <div class="md:col-span-2 space-y-4">

                    <div class="p-5 bg-gray-100 rounded-lg dark:bg-gray-800">
                        <span class="text-md font-bold"> {{ moviesStore.movieDetails.popularity }}
                        </span> Popularity
                    </div>
                    <div class="p-5 bg-gray-100 rounded-lg dark:bg-gray-800">
                        <span class="text-md font-bold">{{ moviesStore.movieDetails.release_date }}</span> Release Date
                    </div>
                    <div class="p-5 bg-gray-100 rounded-lg dark:bg-gray-800">
                        <div class="flex items-center space-x-2 mb-2">
                            <span class="font-medium">Viewer rating:</span>
                            <span class="text-orange-500" v-for="i in roundedVoteAverage" :key="i.id">
                                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                    class="hi-solid hi-star inline-block w-5 h-5">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>

                            </span>
                        </div>
                        <div class="text-sm text-gray-600">
                            {{ moviesStore.movieDetails.vote_average }} average based on {{
                                moviesStore.movieDetails.vote_count }} ratings.
                        </div>
                    </div>
                    <div class="p-5 bg-gray-100 rounded-lg text-sm space-y-3 dark:bg-gray-800">
                        <div class="flex space-x-2">
                            <div class="w-1/2 font-medium">Home Page</div>
                            <div class="w-1/2"> {{ moviesStore.movieDetails.homepage }}</div>
                        </div>
                        <div class="flex space-x-2">
                            <div class="w-1/2 font-medium">IMDB ID</div>
                            <div class="w-1/2">{{ moviesStore.movieDetails.imdb_id }}</div>
                        </div>

                        <div class="flex space-x-2">
                            <div class="w-1/2 font-medium">Original Language</div>
                            <div class="w-1/2">{{ moviesStore.movieDetails.original_language }}</div>
                        </div>
                        <div class="flex space-x-2">
                            <div class="w-1/2 font-medium">Tag line</div>
                            <div class="w-1/2">{{ moviesStore.movieDetails.tagline }}</div>
                        </div>

                        <div class="flex space-x-2">
                            <div class="w-1/2 font-medium">Production companies</div>
                            <div v-for="i in moviesStore.movieDetails.production_companies" :key="i.id">
                                <a href="javascript:void(0)" class="text-indigo-600 hover:text-indigo-400">{{ i.name }}</a>,
                            </div>
                        </div>
                    </div>

                </div>
                <!-- END Product Info Sidebar -->

            </div>
            <UserComments />
            <pleaseFixFollowingErrors v-if=genericStoreInstance.pleaseFixFollowingErrorsVisible />

        </div>

    </div>

    <!-- END Product Details Section: With Info Sidebar -->
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMoviesStore } from '../stores/moviesStore';
import UserComments from '../components/MovieDetailView/UserComments.vue'
import pleaseFixFollowingErrors from '../components/generic/pleaseFixFollowingErrors.vue'
import { genericStore } from '../stores/genericStore';

const moviesStore = useMoviesStore();
const genericStoreInstance = genericStore();

const router = useRouter();

onMounted(async () => {
    const route = useRoute();
    const movieId = route.params.id;
    moviesStore.movieIdFor = route.params.id;
    await moviesStore.fetchMovieDetails(movieId)
    await moviesStore.fetchComment(movieId)
});
const roundedVoteAverage = computed(() => Math.round(moviesStore.movieDetails.vote_average));

const navigateToDashboard = () => {
    router.push('/');
};
</script>
<style></style>