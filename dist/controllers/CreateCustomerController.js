"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerController = void 0;
const CreateCustomerService_1 = require("../services/CreateCustomerService");
class CreateCustomerController {
    async handle(request, replay) {
        const { name, email } = request.body;
        const customerService = new CreateCustomerService_1.CreateCustomerService();
        const customer = await customerService.execute({ name, email });
        replay.send(customer);
    }
}
exports.CreateCustomerController = CreateCustomerController;
