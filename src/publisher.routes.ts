import {Router} from "express";
import publisherController from "./publisher.controller";

const routesPublisher = Router()

    // POST
routesPublisher.post('/publisher', publisherController.create)

    // GET
routesPublisher.get('/publisher', publisherController.find)
routesPublisher.get('/publisher/:name', publisherController.findByName)
routesPublisher.get('/publisher/:cnpj', publisherController.findByCNPJ)

    // PUT
routesPublisher.put('/publisher/:name', publisherController.update)

    // DELETE
routesPublisher.delete('/books/:name', publisherController.delete)

export { 
    routesPublisher
}