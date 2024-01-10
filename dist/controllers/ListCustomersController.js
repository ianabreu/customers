"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomersController = void 0;
const ListCustomersService_1 = require("../services/ListCustomersService");
class ListCustomersController {
    async handle(request, replay) {
        const listCustomerService = new ListCustomersService_1.ListCustomersService();
        const customers = await listCustomerService.execute();
        replay.send(customers);
    }
}
exports.ListCustomersController = ListCustomersController;
