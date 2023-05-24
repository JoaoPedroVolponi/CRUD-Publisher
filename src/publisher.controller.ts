import { Request, Response } from "express";
import { PublisherService } from "./publisher.service";

class PublisherController { 

    // private publisherService: PublisherService;

    // constructor() { 
    //     this.publisherService = new PublisherService();
    // }


    async create(req: Request, res: Response) { 
        const publisher = await new PublisherService().create(req.body)
        
        return res.json(publisher)
    }

    async find(req: Request, res: Response) { 
        const publisher = await new PublisherService().find()
       //const publisher = await this.publisherService.find()
        
        return res.json(publisher)
    }

    async findById(req: Request, res: Response) {
        const publisher = await new PublisherService().findById(req.params.id)

        return res.json(publisher)   
    }


    async findByName(req: Request, res: Response) {
        const publisher = await new PublisherService().findByName(req.params.name)

        return res.json(publisher)
    }

    async findByAddress(req: Request, res: Response) { 
        const publisher = await new PublisherService().findByAddress(req.params.address)
        
        return res.json(publisher)
    }


    async findByCNPJ(req: Request, res: Response) { 
    //  const cnpj = req.params.cnpj;
        const publisher = await new PublisherService().findByCNPJ(req.params.cnpj)

        return res.json(publisher);
    }

    async update(req: Request, res: Response) { 
        const publisher = await new PublisherService().update(req.params.name, req.body)

        return res.json(publisher)
    }


    async deleteByID(req: Request, res: Response) {
        const publisher = await new PublisherService().deletePublisherByID(req.params.id)

        return res.json(publisher)   
    }

    async deleteByName(req: Request, res: Response) { 
        const publisher = await new PublisherService().deletePublisherByName(req.params.name)

        return res.json(publisher)
    }

    async deleteByCNPJ(req: Request, res: Response) { 
        const publisher = await new PublisherService().deletePublisherByCNPJ(req.params.cnpj)

        return res.json(publisher)
    }
    

}

export default new PublisherController()