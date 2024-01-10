import fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './route';
import dotenv from "dotenv";




//const port = process.env.PORT || 3333;
const host = ("RENDER" in process.env) ? "0.0.0.0" : `localhost`;

const app = fastify({ logger : true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
})



const start = async () => {

    await app.register(cors);
    await app.register(routes);

    try{
        await app.listen({ port: 3333, host: host })
    }catch(err){
        process.exit(1)
    }
}

start();
