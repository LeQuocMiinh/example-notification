import { Hono } from 'hono';
import { routes } from './route';
import { Env } from './store/cache/cache.service';
import { serve } from '@hono/node-server';
import { logger } from '@packages/common';

const app = new Hono<{ Bindings: Env }>();

routes(app);


serve({ ...app, port: 3000 }, info => {
  logger.info(`Listening on http://localhost:${info.port}`);
})