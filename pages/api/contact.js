// /api/contact
function handler(req,res) {
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
      res.status(201).json({ message: "successfully store message", message: newMessage });
   }
}
export default handler;