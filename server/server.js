"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_proxy_middleware_1 = require("http-proxy-middleware");
var express_1 = __importDefault(require("express"));
var apicache_1 = __importDefault(require("apicache"));
var app = express_1.default();
var cache = apicache_1.default.middleware;
var proxy = http_proxy_middleware_1.createProxyMiddleware({
    target: 'https://www.home24.de',
    changeOrigin: true,
    logLevel: 'debug',
});
app.post('/graphql', cache('5 minutes'), proxy);
app.listen(3001);
