import { createProxyMiddleware } from 'http-proxy-middleware';
import express, { Application } from 'express';
import apicache from 'apicache'

const app: Application = express();
const cache = apicache.middleware;

const proxy = createProxyMiddleware({
  target: 'https://www.home24.de',
  changeOrigin: true,
  logLevel: 'debug',
});

app.post('/graphql', cache(100), proxy);
app.listen(3001);
