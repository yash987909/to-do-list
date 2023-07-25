import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = 3000;




app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

let taskarr = [];
app.get("/",(req,res)=>{
    res.render("index.ejs",{ taskarr:taskarr});
})

app.post("/",(req,res)=>{
    const t = req.body["task"];
    if(t){
        taskarr.push(t);
    }
    res.render("index.ejs",{ taskarr:taskarr});
})

let workarr = [];

app.get("/work",(req,res)=>{
    res.render("work.ejs",{workarr:workarr});
})

app.post("/work",(req,res)=>{
    const t = req.body["task"];
    if(t){
        workarr.push(t);
    }
    res.render("work.ejs",{workarr:workarr});
})


app.listen(port,()=>{
    console.log("Server is running");
})