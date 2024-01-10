"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const route_1 = require("./route");
const app = (0, fastify_1.default)({ logger: true });
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});
const start = async () => {
    await app.register(cors_1.default);
    await app.register(route_1.routes);
    try {
        await app.listen();
    }
    catch (err) {
        console.log("erro");
        process.exit(1);
    }
};
start();
