const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');



dotenv.config();
//connect to DB
// mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log('connected to DB')
// })



//const DB="mongodb+srv://1234:Ahjk12@cluster0.ihvrjfh.mongodb.net/blog?retryWrites=true&w=majority"

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false}).then(()=>{
    console.log("connection successful")
}).catch((err)=>console.log("err"))




app.listen(3000, () => console.log('Server running......'));

