// /api/contact
import { MongoClient } from 'mongodb';
async function handler(req,res) {
   if(req.method === 'POST') {
      const { email, name, message } = req.body;
      if(!email ||
         !email.includes('@') ||
         !name || 
         name.trim() === '' ||
         !message ||
         message.trim() === ''
      ) {
         res.status(422).json({ message: "Invalid Input." });
         return ;
      }
      //store it in database
      const newMessage = {
         email,
         name,
         message
      };
      let client;
      const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.v364j.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
      try {
         //const MONGO_URI = `mongodb+srv://aditi:NruNqUTV1OPMxTvN@cluster0.v364j.mongodb.net/blogApp?retryWrites=true&w=majority`;
         client = await MongoClient.connect(connectionString);
      
      } catch(e) {
         res.status(500).json({ message: e.message || "Failed to connect with Database" });
         return;
      }
      const db = client.db();
      try {
         const result = await db.collection('messages').insertOne(newMessage);
         newMessage.id = result.insertedId;
      } catch(e) {
         client.close();
         res.status(500).json({ message: e.message || "storing message failed" });
         return;
      }
      client.close();
      res.status(201).json({ message: "successfully store message", message: newMessage });
   }
}
export default handler;