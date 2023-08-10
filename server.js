const express  = require('express');
const env = require('dotenv')
const mongoose = require('mongoose');
const Routers = require('./routes/userauth/auth')
const admin = require('./routes/admin/adminauth')
const category = require('./routes/category/categoryroute')
const app = express();
 
app.use(express.json());
env.config()

 const port = process.env.PORT || 3000;
app.use('/api',Routers)
app.use('/api',category)
app.use('/api/admin',admin)
 mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ionxngr.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser : true,
      useUnifiedTopology: true,
      
    
     }).
     then(()=>console.log(`connected to mongo db`));


 app.listen(port, ()=>{
   console.log("server is running", `${port}`)
})