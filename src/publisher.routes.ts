import {Router} from "express";
import publisherController from "./publisher.controller";

const routesPublisher = Router()

    // POST
routesPublisher.post('/publisher', publisherController.create)

    // GET
routesPublisher.get('/publisher', publisherController.find)
routesPublisher.get('/publisher/cnpj/:cnpj', publisherController.findByCNPJ)
routesPublisher.get('/publisher/name/:name', publisherController.findByName)
routesPublisher.get('/publisher/:id', publisherController.findById)
routesPublisher.get('/publisher/address/:address', publisherController.findByAddress)

    // PUT
routesPublisher.put('/publisher/:name', publisherController.update)

    // DELETE
routesPublisher.delete('/publisher/id/:id', publisherController.deleteByID)
routesPublisher.delete('/publisher/name/:name', publisherController.deleteByName)
routesPublisher.delete('/publisher/cnpj/:cnpj', publisherController.deleteByCNPJ)

export { 
    routesPublisher
}