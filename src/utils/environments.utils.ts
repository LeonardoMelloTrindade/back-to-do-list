import { config } from "dotenv";
import { envsSchema } from "./schemas/environments.schema";

config();

export const environments = envsSchema.parse(process.env);