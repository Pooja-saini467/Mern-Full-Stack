// import Product from '../models/productModel.js'
import User from "../models/userModel.js"
// import products from "./products.js"
import mongoose from 'mongoose'
import users from "./users.js"


const connectDB = () => {
  try {
    const conn = mongoose.connect("mongodb+srv://Traversymedia:Traversymedia123@traversymedia.krnqq89.mongodb.net/proshop?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

connectDB()

users.forEach((user) => {
  User({
    name: user.name,
    email: user.email,
    password: user.password,
    isAdmin: user.isAdmin,
  }).save()
  console.log("User created")
})
