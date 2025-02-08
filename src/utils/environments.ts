import { config } from "dotenv";
import { envsSchema } from "./schemas/env.schema";

config();

export const environments = envsSchema.parse(process.env);





