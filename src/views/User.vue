<template>
  <div>
    <div v-if="!isAuthenticated">
      <AuthTelegramButton></AuthTelegramButton>
    </div>
    <div v-else>
      <h1>Информация о пользователе</h1>
      <p><strong>Имя:</strong> {{ user.name }}</p>
      <p><strong>Telegram ID:</strong> {{ user.id }}</p>
    </div>
  </div>
</template>
  
<script>
import api from '../services/api'; // Импорт вашего сервиса API
import AuthTelegramButton from '../components/AuthTelegramButton.vue'; // Импорт вашего сервиса API

export default {
  data() {
    return {
      isAuthenticated: false,
      user: null,
    };
  },
  async created() {
    try {
      const response = await this.checkAuth();
      this.isAuthenticated = response.data.authenticated;
      this.user = response.data.user;
    } catch (error) {
      console.error('Ошибка проверки авторизации:', error);
    }
  },
  components: {
    AuthTelegramButton
  },
  methods: {
    async checkAuth() {
      const token = localStorage.getItem('auth_token'); // Или другой метод хранения токена
      return api.get('/auth/check', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  }
};
</script>

  
<style>
/* Ваши стили */
</style>
  