<template>
    <div>
        <button class="bg-white text-gray-900 cursor shadow-md h-11 flex items-center m-5 p-2 w-auto rounded-md  ">{{option}}<h1>{{answer}}</h1>
        </button>
        
    </div>
</template>
<script setup>

import { defineProps } from 'vue';
const props=defineProps({
   option: String
})


</script>
