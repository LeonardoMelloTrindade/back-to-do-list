import { sincronyzeDatabase } from "./configs/database";
import { startServer } from "./configs/server";

const initializeApp = async () => {
    await sincronyzeDatabase();
    startServer();
};

initializeApp();
