<script setup>
import Nav from '@/components/Nav.vue';
import SectionCardVue from '../components/SectionCard.vue';
import {useQuizStore} from '../stores/quix'

const quizStore=useQuizStore();
const subjects=quizStore.subject
</script>

<template>
  <main class="md:ml-8 md:mr-8">
   
    
    <h1>hello</h1>
    <div class=" grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-5">
      <div v-for="item in subjects" :key="item.id">
        <SectionCardVue :title='item.title' :description="item.description" :image="item.image"/>
      </div>
    </div>

    
    
  </main>
</template>
