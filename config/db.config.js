import mongoose from 'mongoose';

export const dbConnection = async () => {
   const MONGO_URI = process.env.MONGO_URI || '';
   const connection = await mongoose.connect(MONGO_URI);

   console.log('Mongodb connected', connection.connection.host)
}





