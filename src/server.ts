import mongoose from "mongoose";
import config from "./config/index"; 
import app from "./app";


// connectivity
async function server() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("♻️Database connected✅");

     app.listen(config.port, () => {
        console.log(`Application app listening on port ${config.port}`)
     });

    } catch(err){
      console.log("Failed connect to database 🚫", err);
    }  
}
server();