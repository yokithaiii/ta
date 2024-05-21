<template>
	<MainLayout>
	  <nav>
		<router-link to="/">На главную</router-link>
		<router-link to="/donate">Отправить донат</router-link>
	  </nav>
	  <router-view />
	</MainLayout>
  </template>
  
  <script>
  import MainLayout from './layouts/MainLayout.vue';
  import { createRouter, createWebHistory } from 'vue-router';
  
  export default {
	components: {
	  MainLayout,
	},
  };
  </script>
  
  <style>
  /* Ваши стили */
  </style>
  