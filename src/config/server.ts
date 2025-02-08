import express from 'express';
import { environments } from '../utils/environments';

const app = express();
const port = environments.API_PORT;

app.get('/', (req, res) => {
    res.send('ta indo esse kct né?')
})

export const startServer = () => {
    try {
        app.listen(port, () => {
            console.log(`🚀 Servidor iniciado na port ${port}`);
        });
    } catch (error) {
        console.error('❌ Erro ao iniciar o servidor:', error);
    }
}