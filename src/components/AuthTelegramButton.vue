<template>
    <div>
        <!-- <a href="tg://resolve?domain=TonAlertsTestBot">Login with Telegram</a> -->
        <button @click="AuthWithTelegram" class="button">Login with Telegram</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../services/api';

const auth = ref(null);

const AuthWithTelegram = () => {
    api.get('/auth/telegram')
        .then(response => {
            auth.value = response.data;
            console.log(response);
        })
        .catch(e => {
            console.error(e);
        });
};
</script>