import prismaClient from "../prisma";

interface CreateCustomersProps{
    name: string;
    email: string
}

class CreateCustomerService{
    async execute( {name, email }: CreateCustomersProps ){
        if(!name && !email){
            throw new Error("Preencha todos os campos");
        }

        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return customer;
    }
}

export { CreateCustomerService }