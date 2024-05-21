<template>
    <div>
      <h1>Список донатов</h1>
      <ul>
        <li v-for="donation in donations" :key="donation.id">
          {{ donation.createdAt }} - {{ donation.amount }} - {{ donation.message }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import gql from 'graphql-tag';
  import { useQuery } from '@vue/apollo-composable';
  
  export default {
    setup() {
      const streamerId = 1; // заменить на реальный ID стримера
      const GET_DONATIONS = gql`
        query getDonations($streamerId: ID!) {
          donations(streamerId: $streamerId) {
            id
            amount
            message
            createdAt
          }
        }
      `;
  
      const { result, loading, error } = useQuery(GET_DONATIONS, { streamerId });
  
      const donations = ref([]);
  
      onMounted(() => {
        if (!loading.value && result.value) {
          donations.value = result.value.donations;
        }
      });
  
      return {
        donations,
        loading,
        error,
      };
    },
  };
  </script>
  