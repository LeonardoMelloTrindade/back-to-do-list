import { sincronyzeDatabase } from "./config/database";
import { startServer } from "./config/server";

const initializeApp = async () => {
    await sincronyzeDatabase();
    startServer();
};

initializeApp();
