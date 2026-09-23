import express from "express";
import cors from "cors";
const app=express(); app.use(cors()); app.use(express.json());
const PORT=Number(process.env.PORT||4000);
app.get("/health",(_,res)=>res.json({ok:true,service:"Aura Farming"}));
app.post("/api/login",(req,res)=>{const {email,password}=req.body||{}; if(email!=="demo@aurafarming.com"||password!=="demo1234") return res.status(401).json({message:"Invalid credentials"}); res.json({account:{accountId:"AURA-100001",balance:10000,equity:10000,challenge:"$10,000 Simulated"}});});
app.listen(PORT,()=>console.log("Aura Farming API on "+PORT));