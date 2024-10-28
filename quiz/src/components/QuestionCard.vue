<template>
    <div class="justify-center flex flex-col items-center">
        <div class="bg-green-50 text-black font-semibold items-center justify-center h-11 p-2 w-1/12 rounded-md mt-5 mr-2 mb-5">
            <h5>Physics Quiz</h5>
        </div>
        <div>
            <h5 class="text-color-green font-mono font-bold">What is the eletericity meured</h5>
        </div>

        <div class="flex flex-row">
            <AnswerCard/>
            <AnswerCard/>
        </div>
        <div class="flex flex-row">
            <AnswerCard/>
            <AnswerCard/>
        </div>
        
    </div>
</template>
<script setup>
import AnswerCard from './AnswerCard.vue';

</script>
