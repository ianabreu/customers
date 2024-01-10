"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const CreateCustomerController_1 = require("./controllers/CreateCustomerController");
const ListCustomersController_1 = require("./controllers/ListCustomersController");
const DeleteCustomerController_1 = require("./controllers/DeleteCustomerController");
async function routes(fastify, options) {
    fastify.get("/teste", async (request, replay) => {
        return { ok: true };
    });
    fastify.post("/customer", async (request, replay) => {
        return new CreateCustomerController_1.CreateCustomerController().handle(request, replay);
    });
    fastify.get("/customers", async (request, replay) => {
        return new ListCustomersController_1.ListCustomersController().handle(request, replay);
    });
    fastify.delete("/customer", async (request, replay) => {
        return new DeleteCustomerController_1.DeleteCustomerController().handle(request, replay);
    });
}
exports.routes = routes;
