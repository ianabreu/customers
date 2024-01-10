import dotenv from "dotenv";

import fastify from 'fastify';

import cors from '@fastify/cors';

import { routes } from './route';

const port = process.env.PORT || 3333;
const host = ("RENDER" in process.env) ? "0.0.0.0" : `localhost`;

const app = fastify({ logger : true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
})



const start = async () => {

    await app.register(cors);
    await app.register(routes);

    try{
        await app.listen({ port: port, host: host })
    }catch(err){
        process.exit(1)
    }
}

start();
