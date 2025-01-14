import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/', routes);

try {
    app.listen(PORT, () => {
        console.log(`🌍 Servidor iniciado na porta ${PORT}`)
    })
  } catch (error) {
     throw Error (`❌ Erro ao iniciar o servidor: ${error}`)
  }
