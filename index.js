const fs = require("fs")
const express = require("express")
const app = express()
app.use(express.json())
 let today = new Date()
 let d= today.getDate()
 let h= today.getHours()
 let m= today.getMinutes()
app.get("/",(req,res)=>{
    fs.writeFile(`${d}-${h}.${m}.txt`, `${today}`, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
      
     res.status(201).send("file created sucessfully")
})

app.get("/file",(req,res)=>{
 fs.readdir("./datas",(err,file)=>{
    if(err){
        console.log(err)
    }
    file.forEach((file)=>{
        fs.readFile(`./datas/${file}`,"utf8",(err,main)=>{
            if(err){
                console.log(err)
            }
            console.log(`this is from ${file} :`, main)
        })
    })
    res.status(200).send("file is visible")
 })
})

app.listen(3000,()=>{
    console.log("connection run on port 3000")
})

