import express from "express";
import cors from 'cors';
import fs from 'fs'


const app = express();
app.use(cors());


app.get("/getData",(req,res) => {

    res.send("The lenght of the squence is")

})

app.post("/",(req,res) => {

    console.log(req.body)

//    const  {file} = req.body

//    const sequence = {
//         file: file
//    } 
//    fs.readFile(file, 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data.length)
   })
   



app.listen(5000, ()=> console.log("App is running"));
