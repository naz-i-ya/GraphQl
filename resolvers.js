import { users, quotes } from './fakedb.js'
import {randomBytes} from 'crypto'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { JWT_TOKEN } from './config.js'

const User = mongoose.model("User")
const Quote = mongoose.model("Quote");

const resolvers = {
    Query:{
        /*users: () => users,
        user: (_, {_id}) => users.find(user => user._id == _id),
        quotes: () => quotes,
        iquote:(_,{by}) => quotes.filter(quote => quote.by == by)*/
        users: async() => await User.find({}),
        user: async(_, {_id}) => await User.findOne({_id}),
        quotes: async() => await Quote.find({}).populate("by", "_id firstName"),
        iquote: async(_,{by}) => await Quote.find({by})
    },
    User:{
        /*quotes: (user) => quotes.filter(quote => quote.by == user._id)*/
        quotes: async(user) => await Quote.find({by: user._id})
    },
    Mutation: {
        signupUser:async(_, {userNew}) => {
           const user = await User.findOne({email: userNew.email})
           if(user){
            throw new Error ("User already exists with this email");
           }

           const hashedPassword = await bcrypt.hash(userNew.password, 10)

           const newUser =  new User({
            ...userNew,
            password: hashedPassword
           })

           return await newUser.save()
           
        },
        signinUser: async(_, {signInUser}) => {
            const user = await User.findOne({email: signInUser.email})
            if(!user){
                throw new Error("User doesnot exist with that email")
            }
            const doMatch = await bcrypt.compare(signInUser.password, user.password)

            if(!doMatch){
                throw new Error("email or password is invalid");
            }

            const token = jwt.sign({userId: user._id}, JWT_TOKEN)

            return {token}
        },
        createQuote:async(_, {name}, {userId})=>{
            if(!userId) throw new Error("You must be logged in..")
           const newQuote = new Quote({
                name,
                by: userId
            })
            await newQuote.save()
            return 'Quote saved successfully'
        } 
    }
}

export default resolvers