import express from "express";
const router = express.Router();

router.get("/login" , (req,res)=>{
  res.send("login")
})

router.get("/signin" , (req,res)=>{
  res.send("signin")
})

router.get("/logout" , (req,res)=>{
  res.send("logout")
})

export default router;