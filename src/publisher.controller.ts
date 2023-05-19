import { Request, Response } from "express";
import { PublisherService } from "./publisher.service";

class PublisherController { 

    async create(req: Request, res: Response) { 
        const publisher = await new PublisherService().create(req.body)
        
        return res.json(publisher)
    }

    async find(req: Request, res: Response) { 
        const publisher = await new PublisherService().find()
        
        return res.json(publisher)
    }

    async findByName(req: Request, res: Response) {
        const publisher = await new PublisherService().findByName(req.params.name)

        return res.json(publisher)
    }


    async findByCNPJ(req: Request, res: Response) { 
        const publisher = await new PublisherService().findByCNPJ(req.params.cnpj)

        return res.json(publisher)
    }


    async update(req: Request, res: Response) { 
        const publisher = await new PublisherService().update(req.params.name, req.body)

        return res.json(publisher)
    }


    async delete(req: Request, res: Response) { 
        const publisher = await new PublisherService().delete(req.params.name)

        return res.json(publisher)
    }

}

export default new PublisherController()