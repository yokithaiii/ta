import { TonConnectUI } from '@tonconnect/ui';

const tonConnect = new TonConnectUI({
    manifestUrl: 'http://127.0.0.1:5173/manifest.json'
});

tonConnect.disconnect = async function() {
    try {
        await this.connector.disconnect();
    } catch (error) {
        console.error('Ошибка при отключении кошелька:', error);
    }
};

export default tonConnect;
