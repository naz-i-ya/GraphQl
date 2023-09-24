import { ApolloServer } from 'apollo-server'

import { ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'//playground

import typeDefs from './gqlSchema.js'
import mongoose from 'mongoose'
import { JWT_TOKEN, MONGO_URL } from './config.js'
import jwt from 'jsonwebtoken'

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,   
})

mongoose.connection.on("connected", () => {
    console.log("Connected to mongodb")
})

mongoose.connection.on("error",(err) => {
    console.log("Error Connection", err);
})

//import models here
import './models/User.js'
import './models/Quotes.js'

import resolvers from './resolvers.js'

//This is Middleware
const context = ({req}) => {
    const {authorization} = req.headers 
    if(authorization) {
    const {userId} = jwt.verify(authorization, JWT_TOKEN);
    return {userId}
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen(8000).then(({url}) =>console.log(`Server Ready At ${url}`))