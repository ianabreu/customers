"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerController = void 0;
const DeleteCustomersService_1 = require("../services/DeleteCustomersService");
class DeleteCustomerController {
    async handle(request, replay) {
        const { id } = request.query;
        const customerService = new DeleteCustomersService_1.DeleteCustomersService();
        const customer = await customerService.execute({ id });
        replay.send(customer);
    }
}
exports.DeleteCustomerController = DeleteCustomerController;
