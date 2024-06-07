require('dotenv').config()
import mongoose from 'mongoose';

export async function connect() {
    try{
        mongoose.connect('mongodb+srv://Zhansar:OEfuWfrZ7199boHv@cluster.inxlqrb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster');
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error' + err);
            process.exit();
       })
    } catch (error) {
        console.log(error);
    }
}