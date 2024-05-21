<template>
    <div>
        <button @click="fetchPing">Пинг</button>
        <p>{{ response }}</p>
    </div>
</template>
  
<script>
import { ref, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default {
    setup() {
        const response = ref('');

        const { result, loading, error } = useQuery(gql`
        query {
          ping
        }
      `);

        const fetchPing = () => {
            if (loading.value) {
                response.value = 'Загрузка...';
            } else if (error.value) {
                response.value = 'Ошибка: ' + error.value.message;
            } else if (result.value) {
                console.log(result);
                response.value = result.value.ping;
            }
        };

        // Watch for changes in result, loading or error
        watch([result, loading, error], () => {
            fetchPing();
        });

        return {
            response,
            fetchPing,
        };
    },
};
</script>
  