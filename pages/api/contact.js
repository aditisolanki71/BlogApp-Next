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
      console.log('new msg',newMessage);
      let client;
      try {
         const MONGO_URI = `mongodb+srv://aditi:NruNqUTV1OPMxTvN@cluster0.v364j.mongodb.net/blogApp?retryWrites=true&w=majority`;
         client = await MongoClient.connect(MONGO_URI);
      
      } catch(e) {
         res.status(500).json({ message: "Failed to connect with Database", message: newMessage });
         return;
      }
      const db = client.db();
      try {
         const result = await db.collection('messages').insertOne(newMessage);
         newMessage.id = result.insertedId;
      } catch(e) {
         client.close();
         res.status(500).json({ message: "storing message failed" });
         return;
      }
      client.close();
      res.status(201).json({ message: "successfully store message", message: newMessage });
   }
}
export default handler;