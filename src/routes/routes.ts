import express from 'express';
import { groups } from '../controllers/Groups.controller';

const router = express();

router.get('/groups', groups);

export default router;
