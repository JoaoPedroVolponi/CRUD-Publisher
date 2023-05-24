import PublisherModel from './publisher.schema'


export class PublisherService { 

    async create(publisher: any) { 
        const createPublisher = await PublisherModel.create(publisher)

        return createPublisher
    }

    async find() {
        const findedPublisher = await PublisherModel.find()

        return findedPublisher
    }

    async findByName(name: any) { 
        const findedByName = await PublisherModel.findOne({ 
            name: name.toString()
        })
        return findedByName
    }

    async findByAddress(address: any) { 
        const findedByAddress = await PublisherModel.find({ 
            address: address.toString()
        })
        return findedByAddress
    } 

    async findById(id: any) {
        const findedByID = await PublisherModel.findById(id)

        return findedByID
    }

    async findByCNPJ(cnpj: any) { 
        const findedByCNPJ = await PublisherModel.find({
            cnpj: cnpj.toString()
        })

        return findedByCNPJ
    }

    async update(name: any, publisher: any) { 
        const updatePublisher =  await PublisherModel.findByIdAndUpdate(name, { 
            name: publisher.name,
            cnpj: publisher.cnpj,
            address: publisher.address,
        }, {new: true})

        return updatePublisher
    }
    
    async deletePublisherByID(id: any) {
        await PublisherModel.findByIdAndDelete(id)

        return "PUBLISHER deleted By ID!"
   }

   async deletePublisherByName(name: any) { 
        await PublisherModel.findOneAndDelete(name)

    return "PUBLISHER Deleted By NAME!"
   }

   async deletePublisherByCNPJ(cnpj: any) {
        await PublisherModel.findOneAndDelete(cnpj)

        return "PUBLISHER Deleted By CNPJ!"
   }
}