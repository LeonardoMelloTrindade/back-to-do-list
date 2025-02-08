import { z } from 'zod';

export const envsSchema = z.object({
    API_PORT: z.string().default('3000'),
    DATABASE_USER: z.string().min(1, 'DATABASE_USER é obrigatório').max(50),
    DATABASE_PASSWORD: z.string().optional(),
    DATABASE_HOST: z.string().min(1, 'DATABASE_HOST é obrigatório').max(50),
    DATABASE_NAME: z.string().min(1, 'DATABASE_NAME é obrigatório').max(50),
})