<template>
    <div>
      <h1>Отправить донат</h1>
      <form @submit.prevent="submitDonation">
        <div>
          <label for="amount">Сумма:</label>
          <input type="number" v-model="amount" required />
        </div>
        <div>
          <label for="message">Сообщение:</label>
          <input type="text" v-model="message" />
        </div>
        <div>
          <label for="streamerId">ID стримера:</label>
          <input type="text" v-model="streamerId" required />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import gql from 'graphql-tag';
  import { useMutation } from '@vue/apollo-composable';
  
  export default {
    setup() {
      const amount = ref(0);
      const message = ref('');
      const streamerId = ref('');
  
      const CREATE_DONATION = gql`
        mutation createDonation($amount: Float!, $message: String, $streamerId: ID!) {
          createDonation(amount: $amount, message: $message, streamerId: $streamerId) {
            id
            amount
            message
            createdAt
          }
        }
      `;
  
      const { mutate: createDonation } = useMutation(CREATE_DONATION);
  
      const submitDonation = () => {
        createDonation({ amount: parseFloat(amount.value), message: message.value, streamerId: streamerId.value })
          .then(response => {
            console.log(response.data.createDonation);
          })
          .catch(error => {
            console.error('Ошибка при отправке доната:', error);
          });
      };
  
      return {
        amount,
        message,
        streamerId,
        submitDonation,
      };
    },
  };
  </script>
  