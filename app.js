const express=require("express");
const axios=require("axios");
require("dotenv").config();
const app = express();
const apiKey=process.env.API_KEY;
// Serve static files
app.use(express.static("public"));
app.get("/api/weather",async(req,res)=>{
    const city=req.query.city;
    if(!city){
        return res.status(400).json({ error: "City is required" });
    }else{
        const responce=await axios.get('http://api.weatherstack.com/current',{
            params:{
                access_key:apiKey,
                query:city
            }
        });res.json(responce.data)
    }
   
})

app.listen(8000,()=>{
    console.log('server staretd');
})