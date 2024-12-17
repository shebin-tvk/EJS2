import express from "express";
const app = express();
const port = 3000;

let bowl = ["apple","mango","banana"];

app.get("/", (req,res)=>{

    res.render("index1.ejs",{
        fruit:bowl
    });
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})