import express from 'express';
import { environments } from '../utils/environments.utils';
import { routers } from '../routes/routes';

const app = express();
const port = environments.API_PORT;

app.use('/', routers);

export const startServer = () => {
    try {
        app.listen(port, () => {
            console.log(`🚀 Servidor iniciado na port ${port}`);
        });
    } catch (error) {
        console.error('❌ Erro ao iniciar o servidor:', error);
    }
}