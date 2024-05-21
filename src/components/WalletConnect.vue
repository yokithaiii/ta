<template>
    <div>
      <button @click="connectWallet">Подключить кошелек</button>
      <div v-if="walletAddress">Подключенный адрес: {{ walletAddress }}</div>
      <button @click="disconnectWallet">Открепить кошелек</button>
    </div>
</template>

<script>
import tonConnect from '../services/tonconnect';

export default {
  data() {
    return {
      walletAddress: null
    };
  },
  methods: {
    async connectWallet() {
      try {
        const wallet = await tonConnect.connectWallet();
        this.walletAddress = wallet.account.address;
      } catch (error) {
        console.error('Ошибка при подключении кошелька:', error);
      }
    },
    async disconnectWallet() {
      try {
        await tonConnect.disconnect();
        this.walletAddress = null;
      } catch (error) {
        console.error('Ошибка при отключении кошелька:', error);
      }
    }
  },
  mounted() {
    // Проверка на наличие ранее подключенного кошелька при монтировании компонента
    const session = tonConnect.getConnectedWallet();
    if (session) {
      this.walletAddress = session.accounts[0].address;
    }
  }
};
</script>

<style scoped>
/* Ваши стили */
</style>
  