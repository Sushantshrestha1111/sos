<template >
    <div>


<div class="relative flex ml-2 mr-2 w-80 flex-col rounded-xl mt-5 bg-white text-gray-700 shadow-md">
    <div class="relative mx-4 -mt-4 h-40  overflow-hidden rounded-xl bg-blue-gray-500 shadow-blue-gray-500"
    :style="{
        backgroundImage: `url(${image})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'  }">
        

    </div>
    <div class="p-6 ">
        <h5 class="mb-2 block font-semibold font-sans text-base leading-relaxed text-inherit">{{title}}</h5>
        <p class=" font-sans text-base  leading-relaxed text-inherit">
            {{description}}
            </p>
         
           
    </div>
    <div class="p-6 pt-0">
        <button  type="button" class=" rounded-lg bg-blue-500 py-3 px-6 align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          <RouterLink class="font-bold" to="/question/:sub"> Start Quiz</RouterLink>
        </button>
      </div>
    
    
</div>


        
    </div>
  
</template>
<script setup>

import {defineProps} from 'vue'

const props=defineProps({
    title:String,
    description:String,
    image:String,
});

</script>
