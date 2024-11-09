<template>
    <div>
      <!-- Display the Subject Title -->
      <div class="bg-green-50 text-black font-semibold items-center justify-center h-11 p-2 w-1/12 rounded-md mt-5 mr-2 mb-5">
        {{ subject.title }}
      </div>

      <div v-for="(ques,index) in questions" :key="index">
        <QuestionCardVue :question="ques"/>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import QuestionCardVue from "../components/QuestionCard.vue";
  import { useQuizStore } from '../stores/quix';
  
  const quizStore = useQuizStore();
  const subject = { title: "Physics" }; // Assuming a fixed subject title for now
  const questions = quizStore.questions; // Fetch questions from the store
  </script>
  