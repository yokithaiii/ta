<template>
    <!--header-->
    <Header></Header>
    <!--aside-->
    <Aside></Aside>
    <!--main-->
    <main class="p-4 md:ml-64 h-auto pt-20">
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4 p-4">
            <slot></slot>
        </div>
    </main>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from 'flowbite'
import Header from '../components/Header.vue'
import Aside from '../components/Aside.vue'

onMounted(() => {
    initFlowbite();
})
</script>