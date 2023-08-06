<template>
    <!-- Page Container -->
    <div id="page-container" class="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
        <!-- Page Content -->
        <main id="page-content" class="flex flex-auto flex-col max-w-full">
            <div
                class="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
                <!-- Patterns Background -->
                <div
                    class="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16">
                </div>
                <div
                    class="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16">
                </div>
                <!-- END Patterns Background -->

                <!-- Sign In Section -->
                <div class="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
                    <!-- Header -->
                    <div class="mb-8 text-center">
                        <h1 class="text-4xl font-bold inline-flex items-center mb-1 space-x-3">

                            <span>Movie Search DB
                            </span>
                        </h1>
                        <p class="text-gray-500">
                            Welcome, please sign in order to make comment
                        </p>
                    </div>
                    <!-- END Header -->

                    <messagePopup v-if="genericStoreInstance.messageVisible" />
                    <br>

                    <!-- Sign In Form -->
                    <div class="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                        <div class="p-5 lg:p-6 flex-grow w-full">
                            <div class="sm:p-5 lg:px-10 lg:py-8">
                                <form onsubmit="return false;" class="space-y-6">
                                    <div class="space-y-1">
                                        <label for="tk-pages-sign-in-email" class="font-medium">Username</label>
                                        <input v-model="username"
                                            class="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                            type="text" id="tk-pages-sign-in-email" placeholder="Enter your email" />
                                    </div>
                                    <div class="space-y-1">
                                        <label for="tk-pages-sign-in-password" class="font-medium">Password</label>
                                        <input v-model="password"
                                            class="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                            type="password" id="tk-pages-sign-in-password"
                                            placeholder="Enter your password" />
                                    </div>
                                    <div>
                                        <button @click="handleLogin"
                                            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                                            Sign In
                                        </button>
                                        <div
                                            class="space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0 mt-4">
                                            <label class="flex items-center">
                                                <input type="checkbox"
                                                    class="border border-gray-200 rounded h-4 w-4 text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                                                <span class="ml-2">
                                                    Remember me
                                                </span>
                                            </label>
                                            <a href="javascript:void(0)"
                                                class="inline-block text-indigo-600 hover:text-indigo-400">Forgot
                                                Password?</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="py-4 px-5 lg:px-6 w-full text-sm text-center bg-gray-50">
                            Don’t have an account yet?
                            <router-link to="/register" class="font-medium text-indigo-600 hover:text-indigo-400"
                                href="">Join us
                                today</router-link>
                        </div>
                    </div>
                    <!-- END Sign In Form -->

                    <!-- Footer -->
                    <div class="text-sm text-gray-500 text-center mt-6">
                        <a class="font-medium text-indigo-600 hover:text-indigo-400" target="_blank">Movie Search DB</a> by
                        <a class="font-medium text-indigo-600 hover:text-indigo-400" target="_blank">yavuz</a>
                    </div>
                    <!-- END Footer -->
                </div>
                <!-- END Sign In Section -->
            </div>
        </main>
        <!-- END Page Content -->
    </div>
    <!-- END Page Container -->
</template>
<script setup>
import { useAuthStore } from '../stores/authStore.ts';
import { genericStore } from '../stores/genericStore';

import { ref } from 'vue';
import messagePopup from "../components/generic/messagePopup.vue"

const genericStoreInstance = genericStore();

const username = ref('');
const password = ref('');

const { login } = useAuthStore();

const handleLogin = async () => {
    try {
        await login(username.value, password.value);
        // Login successful, redirect to some page, etc.
    } catch (error) {
        // Handle login error
    }
};
</script>
<style></style>