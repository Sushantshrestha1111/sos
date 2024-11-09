<template>
    <div class="justify-center flex flex-col items-center">
      <!-- Display Question Text -->
      <div>
        <h5 class="text-color-green font-mono font-bold">{{ question.question}}</h5>
      </div>
  
      <!-- Loop Through Each Option and Render AnswerCard -->
      <div class="flex flex-row">
        <div v-for="(opt,index) in question.options" :key="index">
            <AnswerCard :option="opt"/>
        </div>
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import AnswerCard from './AnswerCard.vue';
  
  const props = defineProps({
    question: {
      type: Object,
      required: true
    }
  });
  </script>
  