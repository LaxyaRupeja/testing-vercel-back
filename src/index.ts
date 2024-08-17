import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World Testing");
})

app.get("/test",(req,res)=>{
    res.json({
        message: "Hello World Testing"
    });
});

app.get("/test/:name",(req,res)=>{
    res.json({
        message: `Hello ${req.params.name}`
    });
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})