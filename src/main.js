import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import apolloClient from './apollo';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';

import './style.css';

const app = createApp(App);

app.use(PrimeVue);

app.provide(DefaultApolloClient, apolloClient);
app.use(router);

app.mount('#app');
