import {Schema, model} from 'mongoose'

const PublisherSchema = new Schema({ 
    name: String, 
    cnpj: String,
    address: String
})

export default model('Publisher', PublisherSchema)