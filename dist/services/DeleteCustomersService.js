"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomersService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class DeleteCustomersService {
    async execute({ id }) {
        if (!id) {
            throw new Error("Solicitação inválida!");
        }
        const findCustomer = await prisma_1.default.customer.findFirst({
            where: {
                id: id
            }
        });
        if (!findCustomer) {
            throw new Error("Cliente não encontrado!");
        }
        await prisma_1.default.customer.delete({
            where: {
                id: findCustomer.id
            }
        });
        return { message: "Cliente deletado com sucesso!" };
    }
}
exports.DeleteCustomersService = DeleteCustomersService;
