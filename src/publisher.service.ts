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


    async findByCNPJ(cnpj: any) { 
        const findedByCNPJ = await PublisherModel.findOne({
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

    async delete(name: any) { 
        const deletePublisher = await PublisherModel.findByIdAndDelete(name)

        return "Publisher DELETED!"
    }
}