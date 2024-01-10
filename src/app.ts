import fastify from "fastify";

import cors from "@fastify/cors";

import { routes } from "./route";

const app = fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen();
  } catch (err) {
    console.log("erro");

    process.exit(1);
  }
};

start();
