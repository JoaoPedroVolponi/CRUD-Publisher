import express from 'express'
import mongoose from 'mongoose'
import { routesPublisher } from './src/publisher.routes'

class App { 

    public express: express.Application

    public constructor(){ 
        this.express = express()
        this.middleware()
        this.routes()
        this.database()
    }

    public middleware(): void { 
        this.express.use(express.json())
    }

    public async database() { 
        try { 
            mongoose.set("strictQuery", true) 
            // usuario: joaopedro
            // senha: joaopedro123
            await mongoose.connect('mongodb+srv://joaopedro:joaopedro123@publisher.vs6vhvx.mongodb.net/')
            console.log('BANCO conectado com SUCESSO!')
        } catch(err) { 
            console.error('NAO foi possivel conectar ao BANCO', err)
        }
    }
    
    public routes(): void { 
        this.express.use(routesPublisher)
    }
}

export default new App().express