import mysql2 from 'mysql2/promise';
import { environments } from '../utils/environments';

const db = mysql2.createConnection({
    host: environments.DATABASE_HOST,
    user: environments.DATABASE_USER,
    password: environments.DATABASE_PASSWORD,
    database: environments.DATABASE_NAME
});

export const sincronyzeDatabase = async () => {
    try {
        await db;
        console.log('✅ Conectado ao Banco MySQL');
    } catch(error) {
        console.error('❌ Erro ao conectar-se com banco de dados:', error);
    }
}

