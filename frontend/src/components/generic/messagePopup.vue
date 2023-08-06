<template>
    <!-- Success Alert -->
    <div v-if="store.messageVisible"
        :class="`p-4 md:p-5 rounded ${store.messageBackgroundColor} ${store.messageTextColor}`">
        <div class="flex items-center mb-2">
            <svg class="hi-solid hi-check-circle inline-block w-5 h-5 mr-3 flex-none" :class="store.messageTextColor"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <!-- SVG path code -->
            </svg>
            <h3 class="font-semibold">{{ store.messageTitle }}</h3>
        </div>
        <p class="ml-8">
            {{ store.messageDesc }}
        </p>
    </div>
    <!-- END Success Alert -->
</template>
<script setup>
import { genericStore } from '../../stores/genericStore';
const store = genericStore();


</script>



<style scoped>
/* Define the default styles for the message popup */
.p-4 {
    /* Default background color for the message popup */
    background-color: #f0f0f0;
    /* Default text color for the message popup */
    color: #333;
}

/* Add any additional styles you want for the success message here */

/* Add styles for the error message */
.bg-red-100 {
    /* Red background color for error message */
    background-color: #ffcccc;
}

.text-red-700 {
    /* Red text color for error message */
    color: #ff0000;
}

.bg-green-100 {
    /* Red background color for error message */
    background-color: #00c64f;
}

.text-green-700 {
    /* Red text color for error message */
    color: #e7f2e3;
}


/* You can add more classes for different color combinations as needed */
</style>