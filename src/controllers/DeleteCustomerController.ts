import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteCustomersService } from '../services/DeleteCustomersService';

class DeleteCustomerController{
    async handle(request: FastifyRequest, replay: FastifyReply){

        const { id } = request.query as { id : string }

        const customerService = new DeleteCustomersService();

        const customer = await customerService.execute({ id })

        replay.send(customer);
    }
}

export { DeleteCustomerController }